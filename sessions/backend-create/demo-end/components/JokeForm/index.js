import useSWR from "swr";

export default function JokeForm() {
  const jokes = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = {};
    formData.forEach((value, key) => {
      jokeData[key] = value;
    });

    const response = await fetch("/api/jokes", {
      method: "POST",
      body: JSON.stringify(jokeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      jokes.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form id="joke-form" onSubmit={onSubmit}>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input type="text" id="joke-input" name="joke" />
      <button type="submit">Submit</button>
    </form>
  );
}

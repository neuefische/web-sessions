const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const api = 'https://example-apis.vercel.app/api/status';

// something needs to change here…
// ↙️
function checkIfApiIsAvailable() {
    /**
	 * Hint 1:
	 * Use the `fetch()` function and pass the `apiStatusUrl` into it
	 *
	 * Hint 2:
	 * The fetch function returns a promise which resolves to a Response
	 * object once it is ready.
	 **/

	// --v-- write your code here --v--

	// --^-- write your code here --^--
}

button.addEventListener('click', () => {
	checkIfApiIsAvailable();
});

console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 3: create a select input with all languages as options (keys should be used as values)

const languages = {
  DE: 'German',
  EN: 'English',
  ES: 'Spanish',
  FR: 'French',
  IT: 'Italian',
  NL: 'Dutch',
  PT: 'Portuguese',
  RU: 'Russian',
  ZH: 'Chinese',
};

const select = document.createElement('select');
select.name = 'languages';
main.append(select);

// --v-- write/change code here --v--

for (let key in languages) {
  const option = document.createElement('option');
  option.value = languages[key];
  option.textContent = languages[key];
  select.append(option);
}

// --^-- write/change code here --^--

// Part 3.1: create a navigation bar (keys should be used as values)

const nav = {
  home: {href: '/home', text: 'Home'},
  about: {href: '/about', text: 'About'},
  contact: {href: '/contact', text: 'Contact'},
};

const navElement = document.createElement('nav');
const ul = document.createElement('ul');
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (let key in nav) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = nav[key].href;
  a.textContent = nav[key].text;
  ul.append(li);
  li.append(a);
}

// --^-- write/change code here --^--

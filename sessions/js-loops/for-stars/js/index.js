console.clear();

const STAR_EMPTY =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRIid3Uv0tWYRQH8I9vEVFBOPgDgpaQFm0QbA2cnCM0Ut5FaIuGBif/iMbWwEkIaaqhcAgahLAaRMihhoY0LFPJUq/DPXSfV97u+96XXPrCA4d7vud7zj3POQ8njFMV+dfQgy/tBtQqJpjE7YoxbaOGT1hD10kkGEUW53qVqtrFZGL/8zadxabiDz6rPiClGA/hZbwP+0Y7gacT+zzOhH1R3r5a2NPx/THOYRB3sY1vkfAAW8Hbw26aqB7krOT8Rj+utOBl+BkFNGAIKwnph3wk1/AWjxLuPN4l/t0k7iNGmjeMC5gL4i/MKJ/5ruDsR8wi+kr4f1DHTgQtoLsJpwfPgnOIhxrvtCWG8SEE5pv4X4XvO27+TaRs0d7Iq4elhF879u1JnI6wGlUO4TJe4gUuYUyxdB29TVcTgXF8VUzKOiYU9zTcSYIHEbyXCM8ppuxQPmkZZjtJsJgIb2Iq8d3CRuJ/XVW8W765GZ7Le34cfXiqeCZ6qyS4I9/O+1pfYF2+9VMteA24h4EK/IEo5j/EEQnYeuCo8EBdAAAAAElFTkSuQmCC";

const STAR_FILLED =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABMklEQVRIid3UTytEYRQG8J8hKUoWWFiLlWLBUtmylGRko+zki9j4BFZ8ADu72fkAVpINRUmRf5H8Wcw7zZ3bHfO+g42nTp3uOed5zjnv7fDH6EzMn8AgrmMLSokCZSwn1kSjhHOcoeMvBObwGWw6patYlDP+r6+pB7fqE1xK/0G+xVKGvGazMYVdGb8X3cHvV11fKfjrBbUbeMRdEHzHfYi94jmbvBaS8122ay+hgQaM4/gXyC8wUzAx6MPeD8grGG5Gnl/ZUwLxB3Y0vmlLTOI0gvweiynEWWxHCOy2Sw4nEQJX2rxNYxHkNZtqRvLdLVoo+LYfLI/5qJZzqKh3eIvVTGwRN5n4USr5AN5C8SFGCnKGcaB+JoZSBFZUb8mW1g+4hgeNE7bEJkYT8kdDM/8QX/t+lbGaOvLPAAAAAElFTkSuQmCC";

const main = document.querySelector('[data-js="main"]');

// Part 1: Create 5 stars using a for loop

// --v-- write/change code here --v--

// --^-- write/change code here --^--

// Part 2: Filling Stars on Click with for loop

const stars = document.querySelectorAll('[data-js="star"]');
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", () => {
    fillStars(i);
  });
}

function fillStars(indexToFill) {
  // --v-- write/change code here --v--
  // --^-- write/change code here --^--
}
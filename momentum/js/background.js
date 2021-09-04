const bd = document.querySelector(".body");

const images = ["1.jpg", "2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.classList.add("bg");

bd.style = `background-image: url("img/${chosenImage}")`;




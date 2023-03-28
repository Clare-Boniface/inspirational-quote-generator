import { quotes } from "/quotes.js";
import { backgroundImages } from "/bg-images.js";

const mainQuote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-author");
const button = document.getElementById("new-quote");
const imageContainer = document.getElementById("image-container");

function getRandomImage() {
  let indexImage = Math.floor(Math.random() * backgroundImages.length);
  let image = backgroundImages[indexImage];
  imageContainer.style.backgroundImage = `url( ${backgroundImages[indexImage]} )`;
}

let indexQuote = Math.floor(Math.random() * quotes.length);

function render() {
  let quote = quotes[indexQuote].quote;
  let author = quotes[indexQuote].author;
  mainQuote.textContent = quote;
  quoteAuthor.textContent = author;
}

button.addEventListener("click", function () {
  indexQuote = Math.floor(Math.random() * quotes.length);
  getRandomImage();
  render();
});

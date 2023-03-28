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

function renderQuote() {
  let quote = quotes[indexQuote].quote;
  mainQuote.textContent = quote;
}

function renderAuthor() {
  let author = quotes[indexQuote].author;
  quoteAuthor.textContent = author;
}

button.addEventListener("click", function () {
  indexQuote = Math.floor(Math.random() * quotes.length);
  getRandomImage();
  renderQuote();
  renderAuthor();
});

import createArtworkCard from "./components/artworkCard";
import { createElement } from "./lib/elements";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");
  const headerElement = createElement("header", { textContent: "header" });
  const mainElement = createElement("main", { textContent: "main" });

  async function fetchImages() {
    const response = await fetch("https://api.artic.edu/api/v1/artworks");
    const data = await response.json();
    const artworks = data.data.map((artwork) => createArtworkCard(artwork));
    return artworks;
  }

  const artworks = await fetchImages();
  const artworkCards = artworks.map(function (artwork) {
    console.log(artwork);
    return createArtworkCard(artwork);
  });

  appElement.append(headerElement, ...artworkCards, mainElement);
}
renderApp();

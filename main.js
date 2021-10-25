import createAppHeader from "./components/appHeader";
import createArtworkCard from "./components/artworkCard";
import { fetchArtworks } from "./lib/api";
import { createElement } from "./lib/elements";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");
  const headerElement = createAppHeader();

  const artworks = await fetchArtworks();
  const artworkCards = artworks.map(createArtworkCard);
  //same as
  //const artworkCards = artworks.map((artwork) => createArtworkCard(artwork));

  const mainElement = createElement("main", {}, artworkCards);
  appElement.append(headerElement, mainElement);
}
renderApp();

import { createElement } from "./lib/elements";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { textContent: "header" });
  const mainElement = createElement("main", { textContent: "main" });

  async function fetchImages() {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );
    const data = await response.json();
    console.log(data);
  }

  const footerElement = createElement("footer", { textContent: "footer" });

  appElement.append(headerElement, fetchImages(), mainElement, footerElement);
}
renderApp();

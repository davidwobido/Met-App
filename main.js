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
  // This functions tests if there’s an image in the object. If not, next image should be checked.

  async function fetchHighlightImage() {
    const counter = 0;
    const metURL =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      counter;

    if (object.isPublicDomain === false) {
      console.log("Testing next Image");
    } else {
      counter = counter + 1;
      console.log("Image available");
    }
  }

  appElement.append(headerElement, fetchImages(), mainElement);
}
renderApp();

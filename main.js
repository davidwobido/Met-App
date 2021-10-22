import { createElement } from "./lib/elements";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement("header", { textContent: "header" });
  const mainElement = createElement("main", { textContent: "main" });
  const footerElement = createElement("footer", { textContent: "footer" });

  appElement.append(headerElement, mainElement, footerElement);
}
renderApp();

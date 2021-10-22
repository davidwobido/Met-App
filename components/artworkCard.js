import { createElement } from "../lib/elements";
import styles from "./artworkCard.module.css";

export default function createArtworkCard({ title }) {
  const artworkCard = createElement("div", { className: styles.artworkCard }, [
    createElement(
      "section",
      {
        textContent: "Text will be displayed here",
        className: styles.contentText,
      },
      [
        createElement("h2", {
          textContent: title,
          className: styles.artist,
        }),
      ],
      createElement("section", {
        textContent: "Image will be displayed here",
        className: styles.contentImage,
      })
    ),
  ]);
  return artworkCard;
}

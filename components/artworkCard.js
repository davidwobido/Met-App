import { createElement } from "../lib/elements";
import styles from "./artworkCard.module.css";

export default function createArtworkCard({ title, image_id }) {
  const artworkCard = createElement("div", { className: styles.artworkCard }, [
    createElement(
      "section",
      {
        className: styles.divider,
      },
      [
        createElement("h2", {
          textContent: title,
          className: styles.contentText,
        }),
        createElement("section", {
          // textContent: image_id,
          className: styles.contentImage,
          src: "https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg",
          // https://www.artic.edu/iiif/2/{identifier}/full/1686,/0/default.jpg
          // change identifier to image_id
        }),
      ]
    ),
  ]);
  return artworkCard;
}

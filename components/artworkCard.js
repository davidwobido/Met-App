import { createElement } from "../lib/elements";
import styles from "./artworkCard.module.css";

export default function createArtworkCard({
  title,
  artist_title,
  date_start,
  dimensions,
  image_id,
}) {
  const artworkCard = createElement("div", { className: styles.artworkCard }, [
    createElement(
      "section",
      {
        className: styles.divider,
      },
      [
        createElement("h2", {
          textContent: title,
          className: styles.contentHeadline,
        }),
        createElement(
          "p",
          {
            className: styles.contentCopy,
          },
          [
            artist_title,
            createElement("br"),
            date_start,
            createElement("br"),
            dimensions,
          ]
        ),
        createElement("button", {
          className: styles.nextArtworkButton,
          textContent: "Next Artwork",
          onclick: function () {
            window.scroll(0, window.innerHeight + window.scrollY);
          },
        }),
        createElement("img", {
          className: styles.contentImage,
          src:
            "https://www.artic.edu/iiif/2/" +
            image_id +
            "/full/1686,/0/default.jpg",
        }),
      ]
    ),
  ]);
  return artworkCard;
}

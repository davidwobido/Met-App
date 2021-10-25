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
        createElement("p", {
          // Line-breaks? \n and <br> don’t work
          textContent: artist_title + date_start + dimensions,
          className: styles.contentCopy,
        }), // Next Image button should deactivate noscroll function and jump to the next image
        createElement("button", {
          className: styles.nextImageButton,
          textContent: "Next Image",
          onclick: function () {
            window.scrollTo({
              top: window.innerHeight,
              left: 0,
            });
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

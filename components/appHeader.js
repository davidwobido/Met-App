import { createElement } from "../lib/elements";
import styles from "./appHeader.module.css";

export default function createAppHeader() {
  return createElement("header", {}, [
    createElement("header", {
      textContent: "Art Institute of Chicago App",
      className: styles.title,
    }),
  ]);
}

// router.js: reads the URL hash and shows the matching screen.
//
//   #/            → ListView        (done for you)
//   #/product/7   → DetailView(7)   (TODO: you build this view)
//   #/about       → AboutView       (done for you)
//   anything else → NotFoundView    (done for you)

import { ListView } from "./views/list.js";
import { DetailView } from "./views/detail.js";
import { AboutView } from "./views/about.js";
import { NotFoundView } from "./views/not-found.js";

const app = document.querySelector("#app");

export function router() {
  const hash = location.hash || "#/";

  // TODO 1: split the hash into parts.
  //   "#/product/7".split("/")  →  ["#", "product", "7"]
   const parts = hash.split("/");
  const page = parts[1] || "";
  const param = parts[2] || "";

  // TODO 2: return the right view for each page.
  //   ""        → ListView(app)
  //   "product" → DetailView(app, Number(param))
  //   "about"   → AboutView(app)
  //   otherwise → NotFoundView(app)
  if (page === "") {
    ListView(app);
  } else if (page === "product" && param !== "") {
    DetailView(app, Number(param));
  } else if (page === "about") {
    AboutView(app);
  } else {
    NotFoundView(app);
  }
}


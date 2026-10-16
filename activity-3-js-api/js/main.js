// main.js: starts the app and connects the UI to the API.
import { getProducts, searchProducts } from "./api.js";
import { Card } from "./views/card.js";

const list = document.querySelector("#product-list");
const status = document.querySelector("#status");
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

// TODO 4: write load(query)
//   1. show a LOADING state  (status.textContent = "Loading products…")
//   2. try: await getProducts() or searchProducts(query)
//   3. SUCCESS: list.innerHTML = data.products.map(Card).join("")
//   4. EMPTY:   no products? show a "No products found" message
//   5. ERROR:   catch the error, show a message and a "Try again" button
async function load(query = "") {
  status.classList.remove("is-error");
  status.textContent = "Loading products…";

  list.innerHTML = `
    <li class="skeleton"></li>
    <li class="skeleton"></li>
    <li class="skeleton"></li>
  `;

  try {
    const data = query
      ? await searchProducts(query)
      : await getProducts();

    if (data.products.length === 0) {
      status.textContent = "No products found.";

      list.innerHTML = `
        <li class="state">
          <h3>No products found</h3>
          <p>Try searching for another product.</p>
        </li>
      `;
      return;
    }

    list.innerHTML = data.products.map(Card).join("");
    status.textContent = `${data.products.length} products loaded.`;

  } catch (error) {
    status.classList.add("is-error");
    status.textContent = "Unable to load products.";

    list.innerHTML = `
      <li class="state">
        <h3>Something went wrong</h3>
        <p>Please check your connection and try again.</p>
        <button type="button" class="btn" id="retry-button">
          Try again
        </button>
      </li>
    `;

    document.querySelector("#retry-button").addEventListener("click", () => {
      load(query);
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  load(input.value.trim());
});


document.querySelector("#year").textContent = new Date().getFullYear();
load();

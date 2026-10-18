// detail.js: screen 2, one product, fetched by the id in the URL (#/product/7).
import { getProduct } from "../api.js";

export async function DetailView(app, id) {
  // TODO 1: LOADING state. Show a back link and "Loading product…"
   app.innerHTML = `
    <a href="#/">← Back to products</a>
    <p>Loading product…</p>
  `;
  

  try {
    // TODO 2: const product = await getProduct(id);

    // TODO 3: SUCCESS. Render image, title, price, description, rating, stock
    //         and a "← Back to products" link (href="#/")
    //         Update document.title too.
     const product = await getProduct(id);

    // Display product details
    app.innerHTML = `
      <a href="#/">← Back to products</a>

      <section class="product-details">
        <img
          src="${product.thumbnail || product.images?.[0] || ""}"
          alt="${product.title}"
        />

        <h1>${product.title}</h1>

        <p>${product.description}</p>

        <p><strong>Price:</strong> $${product.price}</p>

        <p><strong>Rating:</strong> ${product.rating}</p>

        <p><strong>Stock:</strong> ${product.stock}</p>
      </section>
    `;

    // Update the browser tab title
    document.title = `${product.title} | Cartly`;
  } catch (error) {
    // TODO 4: ERROR. Try #/product/99999 to test it.
    //         Show "Product not found" and a link back to #/
    app.innerHTML = `
      <h1>Product not found</h1>
      <p>Sorry, we couldn't load this product.</p>
      <a href="#/">← Back to products</a>
    `;

    document.title = "Product Not Found | Cartly";
  }
}

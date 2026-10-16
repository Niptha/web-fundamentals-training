// card.js: a "component": takes one product object, returns an HTML string.
//
// A product from the API looks like:
// { id: 1, title: "Essence Mascara Lash Princess", price: 9.99,
//   rating: 2.56, category: "beauty", brand: "Essence",
//   thumbnail: "https://cdn.dummyjson.com/..." }

export function Card(product) {const brand = product.brand ?? "Unbranded";

  return `
    <li class="card">
      <img
        src="${product.thumbnail}"
        alt="${product.title}"
        width="300"
        height="300"
        loading="lazy"
      >

      <p class="card-category">${product.category}</p>
      <h3 class="card-title">${product.title}</h3>
      <p>${brand}</p>
      <p class="card-price">$${product.price.toFixed(2)}</p>
      <p class="card-rating">Rating: ${product.rating}</p>
    </li>
  `;
}

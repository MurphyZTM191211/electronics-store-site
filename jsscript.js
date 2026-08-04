// 1. Sample product data for your store
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    color: "1e3a8a"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    description: "Health tracking with AMOLED display.",
    color: "0f4e4e"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$45.00",
    description: "Powerful sound in a compact design.",
    color: "2563eb"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    description: "High-precision sensor with RGB lighting.",
    color: "083d77"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$79.99",
    description: "Tactile keys with customizable backlight.",
    color: "0f172a"
  }
];

function productImageDataUri(name, color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#${color}" opacity="0.95"/>
          <stop offset="100%" stop-color="#ffffff" opacity="0.15"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" rx="24" fill="url(#bg)" />
      <rect x="28" y="28" width="344" height="184" rx="20" fill="rgba(255,255,255,0.85)"/>
      <text x="200" y="120" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#${color}" font-weight="700">${name}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// 2. DOM Elements
const productGrid = document.querySelector(".product-grid");
const searchInput = document.querySelector("input[type='text']");

// 3. Function to render product cards on the screen
function displayProducts(items) {
  productGrid.innerHTML = "";

  if (items.length === 0) {
    productGrid.innerHTML = "<p class='empty-state'>No products found.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${productImageDataUri(product.name, product.color)}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <p class="price">${product.price}</p>
      <button type="button">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}

// 4. Live search filter event listener
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
});

// 5. Initial display on page load
displayProducts(products);

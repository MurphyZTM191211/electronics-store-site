// 1. Sample product data for your store
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    image: "https://dummyimage.com/400x240/1e3a8a/ffffff.png&text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    description: "Health tracking with AMOLED display.",
    image: "https://dummyimage.com/400x240/0f4e4e/ffffff.png&text=Smart+Watch"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$45.00",
    description: "Powerful sound in a compact design.",
    image: "https://dummyimage.com/400x240/2563eb/ffffff.png&text=Speaker"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    description: "High-precision sensor with RGB lighting.",
    image: "https://dummyimage.com/400x240/083d77/ffffff.png&text=Gaming+Mouse"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$79.99",
    description: "Tactile keys with customizable backlight.",
    image: "https://dummyimage.com/400x240/0f172a/ffffff.png&text=Keyboard"
  }
];

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
      <img src="${product.image}" alt="${product.name}">
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

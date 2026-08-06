const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    // Replaced duplicate base64 string with a headphone image URL
    image: "https://th.bing.com/th/id/OIP.44ciNE8XxJXm84XpFy4NggHaLd?w=128&h=199&c=7&r=0&o=7&pid=1.7&rm=3" 
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    image: "https://th.bing.com/th/id/OIP.aEkoZRpFqkDJ2IhVlTrs_AHaHa?w=173&h=180&c=7&r=0&o=7&pid=1.7&rm=2"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$45.00",
    image: "https://th.bing.com/th/id/OIP.q5hHbxCYwgRNWTr3nPMjzQHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    image: "data:image/webp;base64,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"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$79.99",
    image: "https://th.bing.com/th/id/OIP.TX5oCdj9Q0-VvHX8JiSX8QHaEK?w=326&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 6,
    name: "Smart TV",
    price: "$7999.99",
    image: "https://th.bing.com/th/id/OIP.kUH80e8ldsGrPXfmHFQuXQHaEK?w=318&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  }
];

// 2. DOM Elements
const productGrid = document.querySelector(".product-grid");
const searchInput = document.querySelector("input[type='text']");

// 3. Function to render product cards on the screen
function displayProducts(items) {
  // Clear any existing content
  productGrid.innerHTML = "";

  // Check if no products matched the search
  if (items.length === 0) {
    productGrid.innerHTML = "<p style='text-align:center;'>No products found.</p>";
    return;
  }

  // Generate HTML for each product
  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:contain;">
      <h3 style="margin: 10px 0 5px; color: #0f172a;">${product.name}</h3>
      <p style="color: #059669; font-weight: bold; margin-bottom: 10px;">${product.price}</p>
      <button style="background-color: darkblue; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}

// 4. Live search filter event listener
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
});

// 5. Initial display on page load
displayProducts(products);

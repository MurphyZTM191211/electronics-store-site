const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    // Replaced duplicate base64 string with a headphone image URL
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" 
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
    image: "https://th.bing.com/th/id/OIP.A1biU9xwjcQj7dxM5MpCFwHaKp?w=130&h=185&c=7&r=0&o=7&pid=1.7&rm=3"
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

// 1. Sample product data for your store
const svgToDataUri = svg => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    image: svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200">
        <rect width="280" height="200" rx="24" fill="#e0f2fe" />
        <path d="M60 90H40a28 28 0 0 0-28 28v30a18 18 0 0 0 18 18h10a12 12 0 0 0 12-12v-44z" fill="#0f172a" />
        <path d="M220 90h20a28 28 0 0 1 28 28v30a18 18 0 0 1-18 18h-10a12 12 0 0 1-12-12v-44z" fill="#0f172a" />
        <path d="M80 80c0-30 20-50 50-50s50 20 50 50v32h-100z" fill="#0f172a" />
        <path d="M90 82h100v18H90z" fill="#93c5fd" />
      </svg>`
    )
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    description: "Track time, fitness, and notifications.",
    image: svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200">
        <rect width="280" height="200" rx="24" fill="#f0f9ff" />
        <rect x="90" y="38" width="100" height="124" rx="26" fill="#0f172a" />
        <rect x="104" y="52" width="72" height="96" rx="18" fill="#e2e8f0" />
        <circle cx="146" cy="100" r="28" fill="#1d4ed8" />
        <path d="M146 88v24M134 100h24" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
        <rect x="102" y="14" width="76" height="24" rx="12" fill="#0f172a" />
        <rect x="102" y="162" width="76" height="24" rx="12" fill="#0f172a" />
      </svg>`
    )
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$45.00",
    description: "Portable sound with deep bass.",
    image: svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200">
        <rect width="280" height="200" rx="24" fill="#e0f2fe" />
        <rect x="64" y="54" width="152" height="96" rx="24" fill="#0f172a" />
        <circle cx="106" cy="102" r="18" fill="#dbeafe" />
        <circle cx="174" cy="102" r="18" fill="#dbeafe" />
        <rect x="88" y="66" width="12" height="68" rx="6" fill="#93c5fd" />
        <rect x="180" y="66" width="12" height="68" rx="6" fill="#93c5fd" />
      </svg>`
    )
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    description: "Ergonomic RGB mouse with fast tracking.",
    image: svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200">
        <rect width="280" height="200" rx="24" fill="#f0f9ff" />
        <path d="M136 44c-34 0-50 26-50 50v52c0 34 16 50 50 50s50-16 50-50V94c0-24-16-50-50-50z" fill="#0f172a" />
        <path d="M136 54v36" stroke="#93c5fd" stroke-width="12" stroke-linecap="round" />
        <path d="M112 150h48" stroke="#93c5fd" stroke-width="12" stroke-linecap="round" />
      </svg>`
    )
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$79.99",
    description: "Clicky keys and bright backlighting.",
    image: svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200">
        <rect width="280" height="200" rx="24" fill="#e0f2fe" />
        <rect x="42" y="66" width="196" height="68" rx="18" fill="#0f172a" />
        <g fill="#dbeafe">
          <rect x="58" y="80" width="24" height="16" rx="6" />
          <rect x="94" y="80" width="24" height="16" rx="6" />
          <rect x="130" y="80" width="24" height="16" rx="6" />
          <rect x="166" y="80" width="24" height="16" rx="6" />
          <rect x="202" y="80" width="24" height="16" rx="6" />
          <rect x="58" y="108" width="24" height="16" rx="6" />
          <rect x="94" y="108" width="24" height="16" rx="6" />
          <rect x="130" y="108" width="24" height="16" rx="6" />
          <rect x="166" y="108" width="24" height="16" rx="6" />
          <rect x="202" y="108" width="24" height="16" rx="6" />
        </g>
      </svg>`
    )
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
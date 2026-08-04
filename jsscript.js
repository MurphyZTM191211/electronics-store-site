const products = [
  {
    name: 'Wireless Headphones',
    price: '$89',
    description: 'Noise cancelling with 30-hour battery.'
  },
  {
    name: 'Smart Watch',
    price: '$129',
    description: 'Health tracking and AMOLED display.'
  },
  {
    name: 'Laptop Stand',
    price: '$49',
    description: 'Adjustable aluminum stand for better posture.'
  },
  {
    name: 'Phone Charger',
    price: '$24',
    description: 'Fast charging with USB-C compatibility.'
  }
];

function createProductImage(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
      <rect width="400" height="240" rx="24" fill="#dbeafe"/>
      <rect x="60" y="40" width="280" height="160" rx="16" fill="#ffffff"/>
      <text x="200" y="115" text-anchor="middle" font-size="28" fill="#1e3a8a" font-family="Segoe UI, Arial, sans-serif">${label}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderProducts(items) {
  const container = document.querySelector('.product-grid');
  if (!container) return;

  container.innerHTML = '';

  if (!items.length) {
    container.innerHTML = '<p class="empty-state">No products found.</p>';
    return;
  }

  items.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${createProductImage(product.name)}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button type="button">Add to cart</button>
    `;
    container.appendChild(card);
  });
}

function filterProducts(query) {
  const term = query.trim().toLowerCase();
  if (!term) return products;
  return products.filter((product) =>
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
}

const searchInput = document.querySelector('.search-input');
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    renderProducts(filterProducts(event.target.value));
  });
}

renderProducts(products);

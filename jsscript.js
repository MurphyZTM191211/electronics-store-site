const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$89.99',
    category: 'Audio',
    description: 'Noise cancelling with 30-hour battery.',
    image: 'https://th.bing.com/th/id/OIP.44ciNE8XxJXm84XpFy4NggHaLd?w=128&h=199&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$129.99',
    category: 'Wearables',
    description: 'Track health, calls, and workouts with ease.',
    image: 'https://th.bing.com/th/id/OIP.aEkoZRpFqkDJ2IhVlTrs_AHaHa?w=173&h=180&c=7&r=0&o=7&pid=1.7&rm=2'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '$45.00',
    category: 'Audio',
    description: 'Deep bass and portable sound for travel days.',
    image: 'https://th.bing.com/th/id/OIP.q5hHbxCYwgRNWTr3nPMjzQHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: '$29.99',
    category: 'Gaming',
    description: 'Ultra-precise tracking and rapid-fire controls.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: '$79.99',
    category: 'Gaming',
    description: 'Tactile switches for fast, satisfying keystrokes.',
    image: 'https://th.bing.com/th/id/OIP.TX5oCdj9Q0-VvHX8JiSX8QHaEK?w=326&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 6,
    name: 'Smart TV',
    price: '$7999.99',
    category: 'Home',
    description: '4K clarity with a cinematic screen for every room.',
    image: 'https://th.bing.com/th/id/OIP.kUH80e8ldsGrPXfmHFQuXQHaEK?w=318&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 7,
    name: 'Laptop',
    price: '$2199.99',
    category: 'Computing',
    description: 'Power-packed performance for work and play.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Gaming Monitor',
    price: '$8999.99',
    category: 'Gaming',
    description: 'High refresh rate for crisp motion and detail.',
    image: 'https://th.bing.com/th/id/OIP.XL68FVcM11kOIq1RU3Cn3AHaHY?w=188&h=187&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 9,
    name: 'Streaming Webcam',
    price: '$199.99',
    category: 'Accessories',
    description: 'Sharp HD video with crisp audio and clarity.',
    image: 'https://th.bing.com/th/id/OIP.uSahOc3jisd9yOmQwICt5AAAAA?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3'
  },
  {
    id: 10,
    name: 'Mic',
    price: '$19.99',
    category: 'Accessories',
    description: 'A compact mic for clean voice capture and streaming.',
    image: 'https://th.bing.com/th/id/OIP.eB0swPnHmsD-slSWe2uHjQHaMQ?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  }
];

const productGrid = document.querySelector('.product-grid');
const searchInput = document.querySelector("input[type='text']");
const toggleButton = document.getElementById('theme-toggle');
const filterBar = document.getElementById('category-filters');
const resultsMeta = document.getElementById('results-meta');
const cartCount = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-button');
const cartDialog = document.getElementById('cart-dialog');
const cartItems = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const closeCartButton = document.getElementById('close-cart');

let selectedCategory = 'All';
let cart = loadCart();

const categories = ['All', ...new Set(products.map((product) => product.category))];

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem('storeCart') || '{}');
    return Object.fromEntries(
      Object.entries(savedCart).filter(
        ([id, quantity]) =>
          products.some((product) => product.id === Number(id)) &&
          Number.isInteger(quantity) &&
          quantity > 0
      )
    );
  } catch (error) {
    console.error('Could not load the saved cart.', error);
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem('storeCart', JSON.stringify(cart));
  } catch (error) {
    console.error('Could not save the cart.', error);
  }
}

function getCartQuantity() {
  return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
}

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

function updateCart() {
  const quantity = getCartQuantity();
  cartCount.textContent = String(quantity);
  cartButton.setAttribute('aria-label', `Open cart, ${quantity} item${quantity === 1 ? '' : 's'}`);
  cartItems.innerHTML = '';

  const cartProducts = products.filter((product) => cart[product.id]);

  if (cartProducts.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Add something you love.</p>';
    cartSubtotal.textContent = formatPrice(0);
    return;
  }

  let subtotal = 0;
  cartProducts.forEach((product) => {
    const price = Number(product.price.replace(/[$,]/g, ''));
    const itemQuantity = cart[product.id];
    subtotal += price * itemQuantity;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${product.image}" alt="" />
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>${formatPrice(price)} each</p>
        <div class="quantity-controls" aria-label="Quantity for ${product.name}">
          <button type="button" data-action="decrease" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
          <span>${itemQuantity}</span>
          <button type="button" data-action="increase" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
        </div>
      </div>
      <button class="remove-cart-item" type="button" data-action="remove" data-id="${product.id}" aria-label="Remove ${product.name} from cart">Remove</button>
    `;
    cartItems.appendChild(item);
  });

  cartSubtotal.textContent = formatPrice(subtotal);
}

function changeCartItem(productId, action) {
  if (action === 'remove' || (action === 'decrease' && cart[productId] === 1)) {
    delete cart[productId];
  } else if (action === 'increase') {
    cart[productId] = (cart[productId] || 0) + 1;
  } else if (action === 'decrease') {
    cart[productId] -= 1;
  }

  saveCart();
  updateCart();
}

function renderFilters() {
  filterBar.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-chip ${category === selectedCategory ? 'active' : ''}" type="button" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join('');

  filterBar.querySelectorAll('.filter-chip').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      renderFilters();
      filterProducts();
    });
  });
}

function getVisibleProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  return products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesText =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesText;
  });
}

function displayProducts(items) {
  productGrid.innerHTML = '';

  if (items.length === 0) {
    productGrid.innerHTML = '<p class="empty-state">No products match your search. Try another keyword or category.</p>';
    resultsMeta.textContent = 'Showing 0 products';
    return;
  }

  resultsMeta.textContent = `Showing ${items.length} product${items.length === 1 ? '' : 's'}`;

  items.forEach((product, index) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.style.animationDelay = `${index * 70}ms`;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-meta">
        <span class="badge-tag">${product.category}</span>
      </div>
      <h3>${product.name}</h3>
      <p class="product-description">${product.description || 'Built for everyday convenience and performance.'}</p>
      <div class="product-footer">
        <p class="price">${product.price}</p>
        <button class="add-to-cart" type="button">Add to Cart</button>
      </div>
    `;

    const addButton = card.querySelector('.add-to-cart');
    addButton.addEventListener('click', () => {
      cart[product.id] = (cart[product.id] || 0) + 1;
      saveCart();
      updateCart();

      const previousText = addButton.textContent;
      addButton.textContent = 'Added ✓';
      addButton.disabled = true;
      addButton.style.opacity = '0.8';

      setTimeout(() => {
        addButton.textContent = previousText;
        addButton.disabled = false;
        addButton.style.opacity = '1';
      }, 850);
    });

    productGrid.appendChild(card);
  });
}

function filterProducts() {
  displayProducts(getVisibleProducts());
}

searchInput.addEventListener('input', filterProducts);

cartButton.addEventListener('click', () => cartDialog.showModal());
closeCartButton.addEventListener('click', () => cartDialog.close());
cartDialog.addEventListener('click', (event) => {
  if (event.target === cartDialog) {
    cartDialog.close();
  }
});
cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (button) {
    changeCartItem(Number(button.dataset.id), button.dataset.action);
  }
});
function applyThemePreference() {
  const isDarkMode = localStorage.getItem('themeMode') === 'dark';
  document.body.classList.toggle('dark-mode', isDarkMode);
  toggleButton.textContent = isDarkMode ? '☀️ Light' : '🌙 Dark';
}

toggleButton.addEventListener('click', () => {
  const switchTheme = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('themeMode', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  };

  if (document.startViewTransition) {
    document.startViewTransition(switchTheme);
  } else {
    switchTheme();
  }
});

renderFilters();
applyThemePreference();
updateCart();
filterProducts();

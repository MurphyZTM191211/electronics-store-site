const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    description: "Noise cancelling with 30-hour battery.",
    // Replaced duplicate base64 string with a headphone image URL
    image: "https://www.bing.com/images/search?view=detailV2&ccid=44ciNE8X&id=B9099CACF7A60A13C6AC5980F3B9F633D6235110&thid=OIP.44ciNE8XxJXm84XpFy4NggHaLd&mediaurl=https%3a%2f%2fpisces.bbystatic.com%2fimage2%2fBestBuy_US%2fimages%2fproducts%2f6533%2f6533161cv12d.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e38722344f17c495e6f385e9172e0d82%3frik%3dEFEj1jP2ufOAWQ%26pid%3dImgRaw%26r%3d0&exph=2365&expw=1528&q=wireless+headphones&FORM=IRPRST&ck=B40890A00CEE9E82DB2502212728CA60&selectedIndex=0&itb=0" 
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

  productGrid.innerHTML = "";



  if (items.length === 0) {

    productGrid.innerHTML = "<p style='text-align:center;'>No products found.</p>";

    return;

  }



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

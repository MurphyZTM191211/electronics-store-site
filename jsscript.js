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
    image: "data:image/webp;base64,UklGRtAKAABXRUJQVlA4IMQKAADQOACdASq4AM4APp1In0wlpCKqo1ILeVATiWdu/HvvHaoSt0YD9swxehfb07erAR/cj/p6+rz6dnPACefukk0dVK+6eoB4p3/j/mvOb9WewP/Mf8B6ZXr0/bP/6e5V+pP/zBnPukSZUrFPbcPqmRPQ8rMQzUzWk8eWf3J5Oo2TcoD6oyr7kH9I3gJ+nVYNtEQ2HmuFbcAqQO535cd6HH2sNcOqKuy41FQu3YtLV3nu4ma1MIMrCMSchh4310scCM8tBfD1W7FQPqSUQvjit7cGwhV78W1n40I0HEqU3kYaLQBhimyZBSSDVO0L+leXesWLhQF3Ak6coK//u23YAxCva5VQ8t/64akz1F9PZmGme4cT519C4eSHAQLs21G9+xK9o18zHu874d03m5EH5hOw+Xg15EN6M5xj8CLcLJGTm4lgcMdedZcgqA6vuGfvZjAf1YQBgOLLV/4q7DfVNtxGbUmcz44G4dArvPKG+6b1A0TM3jc3aDRh18YF2kEWqU0FTNaoZ7SFs4NfDakoK/iXq4HSsxvET/43yEzHMr7IJxgnUPDRqq89Nx4PaNfLCs6qTEkzbmLHQHLd27q5bxGSpCdyW2fteV97D/99BOIIAP7opTBEIr23F/KeFkXJSdl0ck1coAGf4+gKFlV33PbixByRwjh8P4CrzdxlizYJeHAmBmsvmljSB4ab7re1X6yEQVPJyStL4SC3d1SVQGvPoiNwwcBhCIFzvCjMHS/8O2n6fiih30bPWQTRih9ZQr3BTuoZXJhMwhhg/WC52nhmDdaPEqTMPhLpnz/Jv8orRVwtpVnDOtd3Unl0epSL2udc3Ab/B22MEl3GsPh+nvrkWAwlCXka2hj3tdvNM9KCDWBoCP71yWafLtTmxfeZhA21rgg8CuMx1uU9mIZwL99dGhpTk0xsGNx5+5kuzo1vDKJM77G4i/dwhzLi9HdZtKcGxRxl58z5erryC2CO8DSk4hfjpPrS5wboiL+YGqCAuQnn88RJak/kqD7fNwk1djARFq892LeS9AHuZd8UZ49Rv2ch6HIebHGKGORdnOcEj7iw1LgS3gG3xj9Af3FOTacCqLAIqOL77f/R5t+QYzCMYEDfpZjR+8soEZFOx3+y3UTUQdqXFR1V9xra7h89PuHvJnpMAZ2ttYtT4G9Y4uxkxGmhEk2oCAvFJb3pLkbzfumrLUPoqE6lGfnc0dxHmHuz4AUI5JYLO27Sb9IMlx2urCFUF25S7O3c60v77WF25mwRI03Gi+klwXKmnYXlBmkNoPCVyfNp1Mn3CFYiOEkoDx7kqj0eVf+kl6lhEs67StPtzIT1vBwUITg5p0a76D4jtqV0rNEI7m0IgXQeh1kGqnBcKEq8DO3kAXrwsq64ARIV736+26qF5Dnj0BZgHcb4UEtb7khlwHtDtoAorFbmQD1IMslC65HB9fZ5DpoyhYqBPz18PB89a5qtdQlh6+GF1u8HQcgUhcqpgVtqsPram/e08/YsdZZX4fVN7RpRrb7HcYVvtra9oBHC5p/3v0LvX9IoL0rBc74/7QOvOslAjDd09bZqafaLKZLBuBUyHwDH0RnK0KNeAnAGewWoTxM5/zYJGr4HwXiUIaDlpe3AH/6ly+vJj33ktTdM6/n3zlmX0NfS05ToFAk6BEDTDUF0rRMXk+6CV8mC9F4LBH5UClhMm9PHQE5FJtuTDRbfFE7jkDRrIiSee5x5aWwv2oV5kK3STj1BAiAW2Mrh1M+eYAeP2TJHd36kbPc7KPT/IN93DLCAPw100kWgsJmExLb8zqdOwh6QvApIKo1rWA8YxM9HIXBgrFYlRUouxpf0lja1GE+xW7slnRuR2WwQ0a9pe5Tr6HnfKBhDo6BbZlDdi36ea04nedD38eDbjX7OJLZ4Y79fOHZOYKf13G+AC8lzcuq1vA5LV9Apkki8B3/mm52N4vDLhN1xLUfEqs2nrkXpBHQZEr1vsUn+JqQvR5QaylCG97em2tn8fYlIdEo1doV33PFKqAIf4dTftzDzFiOjannQCWPaBin1vIKxLoPoGEBLz7SwD6HuFPMoh7E9RK+75maB0qBrIyoWfluq6JE+oqOMeVCK6HOBiyoZw3Q0dwMbV26b5sQfVaLypK30w9gVgQkEGOtKBCftrQmFYKYptGeuYg8YicOGc7Saqr7ey1Ns6rxjnK7+YjF+DwMgN8uHZ2A6JYWM8d6Zht/OOJw1wKbUieLTD3Aryu+jmKkK+rY2V3sPR6Tc4CbVItEOSzN+628QDDP0hu0/iyZBC5j5/DhFcgCwL3g5zkdSeOF1PWvtLQGL6KfIxYdFRMX9pq2Ez11ayw7ekqc5eqvNZEN0/W73HX5JUg9A5zS430Es5Olgxd6G8naa3iBGFtkzNTWmBPOeEODXKMnZEZUsAk0MZ50SntrVrIzMAJA8AQGXFUp3GTNOoW6mWo3snn0XDGuWG2yNwSSAKD2EliXKU3rYEI9LBPb5gtW7+Y7FL6a+xKMw9L9LD2JImHZE2LtwUwm6wzzIdnGv43ptAZ/tSUQbo2Fx2rSbLtpb3kUd//5uN+p7vGWaGNH+CSsScguGH9jJ6YqCXEexK99HVL8Q5iXZARKeo438b1t9pQynk3ibzY1NEhADC8gIQ5AvWvq+9hG06EZNQYqDsaoxq34VoiDczffd7ithCJdELbjhj7S0+22hH3mMT+SHFFHu+B/aQyhZJjFqXVmtiC6inH9/5CK0RE0oSyJxIgDcY0toK99sW+gmLQvP7II3zElyOSShq2ecz/IsU46ryXkied96lxbCLDEwdwItdWLo1K5VkKScrWDkYeOZ+upKePQEc4p5dZLcG7Paz/ZEPGC/g8EvT/3+dxBhJSm+mSy/0BSHN8e4DeRrN8rBOr1RGr6u9v+7q+En8Pr23hpu4ngpkJnpf/GZrabcRYiC4hKE/xj6Ly+Twq281ucfEiE2cQ0QEmactucYrJaTMl9TyqkHlxNjqYDThVnmXQ2CgbZXNKsImr/OesiSa+lfvkBBJs9Te05JpfWkONLnUUE/lua0W6RPUHpTGna3m5nBn3oWO7DuhC6krXBD0RlBud+I/OK8Ya3dBPb91FijhEdEaNRvLKoJpidrkMWvMU/x54Y5YtIpukEV15WOpWGQkXKgidxswa1Yq9Gwp6VKIDhLxFbAF0FyHJVBq2M5iOV4oEeqwoY9Yt13M18/d82NIC5vsL18InN9fpw7aKCUV5oyWcsXpAPlD68G+kZvGpwbNZbHU0Oh+spGL48+fgu354xguA2ygqR/1vyxhmA8g5aY9Q8Y/mTzxU9Y3ovVIAMA8j+z7mfuVrFUlMMzCBlie0Qg+L3rVeD/k9ctPT854m3eDi6asw8E7jy2YdF88HutAsEnPt5pyjWYrMlss3nzzd7NKg9eBdZMM+7kH2IXXjMo92XdkCz2bZB18/HA2tD2HM5jMy+7zyXbOc+E3XmOU9FCPvf+dfrXXfOsYArn/APdmgEGA42m0my21gvjvBd4R5WQL2WfvWttqXrRc8jKWEb4c4J36nkh/VJygHRv66fXZ/aiGOnB5S8U5PyP+G5XT0Fv0/vtu+lvlej39vsAtSsDBBwoVNQ4SI6ZOgg8HOSj5ptyUiNuzdbMswMTmOmY6soPTziIiepOe7/YMAuVi1Oe0g7KjT4uwAAAAA=="
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
  },
  {
  id: 7,
  name: "Laptop",
  price: "$2199.99",
  image: "data:image/webp;base64,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"
},
  {
    id: 8,
    name: "gaming monitor",
    price: "$8999.99",
    image: "https://th.bing.com/th/id/OIP.XL68FVcM11kOIq1RU3Cn3AHaHY?w=188&h=187&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 9,
    name: "streaming webcam",
    price: "$199.99",
    image: "https://th.bing.com/th/id/OIP.uSahOc3jisd9yOmQwICt5AAAAA?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 10,
    name: "Mic",
    price: "$19.99",
    image: "https://th.bing.com/th/id/OIP.eB0swPnHmsD-slSWe2uHjQHaMQ?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
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

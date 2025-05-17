const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 699,
    rating: 4.5,
    image: "https://via.placeholder.com/80?text=Phone"
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    rating: 4.0,
    image: "https://via.placeholder.com/80?text=T-Shirt"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 1200,
    rating: 4.8,
    image: "https://via.placeholder.com/80?text=Laptop"
  },
  {
    name: "Novel Book",
    category: "books",
    price: 15,
    rating: 4.2,
    image: "https://via.placeholder.com/80?text=Book"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 60,
    rating: 4.3,
    image: "https://via.placeholder.com/80?text=Jeans"
  }
];

const productTableBody = document.querySelector("#productTable tbody");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");

function renderProducts() {
  let filteredProducts = products;

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  // Sort products
  const sortValue = sortBy.value;
  if (sortValue === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Clear current table rows
  productTableBody.innerHTML = "";

  // Add rows for filtered products
  filteredProducts.forEach(product => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${product.image}" alt="${product.name}" width="80"/></td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.rating}</td>
    `;
    productTableBody.appendChild(tr);
  });
}

// Event listeners
categoryFilter.addEventListener("change", renderProducts);
sortBy.addEventListener("change", renderProducts);

// Initial render
renderProducts();

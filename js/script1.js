//this functions for the seller
const {
  AddProduct,
  searchProducts,
  editProducts,
  deleteProduct,
  priceFilter,
  categoryFilter,
} = require("./pureSeller.js");
// console.log(priceFilter);
let productItems = JSON.parse(localStorage.getItem("products"));
const addButton = document.querySelector(".addButton");
let priceRange = document.querySelectorAll(".price-list li");
let priceBtn = document.querySelector(".prods-price");
let categoryBtn = document.querySelector(".prods-category");
let priceList = document.querySelector(".price-list");
let categoryList = document.querySelector(".category-list");
let categories = document.querySelectorAll(".category-list li");

// toggle to show price dropdown list
priceBtn.onclick = () => priceList.classList.toggle("Hidden");

// toggle to show category dropdown list
categoryBtn.onclick = () => categoryList.classList.toggle("Hidden");

// const searchButton = document.querySelector(".button-search");
// let searchInput = document.querySelector(".input-search");
/**
 *  //these are the inputs, i will edit them don't worry.
 *  const nameInput = document.querySelector(".addButton");
    const categoryInput = document.querySelector(".addButton");
    const priceInput = document.querySelector(".addButton");
    const productDetails = document.querySelector(".addButton");
    const imageInput = document.querySelector(".addButton");
    
   
 */
/**
 *
 */
//displayProducts is a impure function that create html elements.
function displayProducts(array) {
  const productContainer = document.querySelector(".prod-container");
  if (array) {
    // creating product HTML
    array.forEach((product) => {
      //   let productCard = document.createElement("div");
      //   productCard.classList.add("box");
      //   let productImg = document.createElement("div");
      //   productImg.classList.add("prod-img");
      //   productImg.setAttribute("src", product.image);
      //   productCard.append(productImg);
      //   let productInfo = document.createElement("div");
      //   productInfo.classList.add("prod-info");
      //   let productTitle = document.createElement("h2");
      //   productTitle.classList.add("prod-title");
      //   productTitle.textContent = product.name;
      //   productInfo.append(productTitle);
      //   let productPargraph = document.createElement("p");
      //   productPargraph.classList.add("prod-category");
      //   productPargraph.textContent = product.category;
      //   productInfo.append(productPargraph);
      //   let productPrice = document.createElement("span");
      //   productPrice.classList.add("prod-price");
      //   productPrice.textContent = product.price;
      //   productInfo.append(productPrice);
      //   let productCart = document.createElement("i");
      //   productCart.classList.add("ri-shopping-cart-2-fill");
      //   productInfo.append(productCart);
      //   productCard.append(productInfo);
      //   productContainer.append(productCard);
    });
  }
}
displayProducts(productItems);

addButton.onclick = () => {
  /* we need to check for inputs that are not empty.
    const productName = nameInput.value;
    const productCategory = categoryInput.value;
    const productPrice = priceInput.value;
    const productDetails = detailsInput.value;
    const productImage = imageInput.value;
    if(productName&&productCategory&&productPrice&&productDetails&&productImage){
        // put the code here.
    }
 */
  const product = {
    id: Date.now(),
    name: "jeans2",
    category: "pants",
    price: 50,
    details: "this is a good pants",
    image: "./images/",
  };
  localStorage.setItem(
    "products",
    JSON.stringify(AddProduct(productItems, product))
  );
  //to clear all inputs.
  //   nameInput.value = "";
  //   categoryInput.value = "";
  //   priceInput.value = "";
  //   detailsInput.value = "";
  //   imageInput.value = "";
  displayProducts(productItems);
};

searchButton.onclick = () => {
  displayProducts(searchProducts(productItems, searchInput.value));
};

priceRange.forEach((price) => {
  let range = price.innerHTML.split("-"); //[m,m]
  price.onclick = () =>
    displayProducts(priceFilter(productItems, range[0], range[1]));
});

categories.forEach((category) => {
  category.onclick = () =>
    displayProducts(categoryFilter(productItems, category.innerHTML));
});

//this functions for the seller
// const {
//   AddProduct,
//   searchProducts,
//   editProducts,
//   deleteProduct,
//   priceFilter,
//   categoryFilter,
// } = require("./pureSeller");
let productItems = JSON.parse(localStorage.getItem("products"));
if (productItems == null) {
  productItems = [];
}
const addButton = document.querySelector(".add");
let priceRange = document.querySelectorAll(".price-list li");
let priceBtn = document.querySelector(".prods-price");
let categoryBtn = document.querySelector(".prods-category");
let priceList = document.querySelector(".price-list");
let categoryList = document.querySelector(".category-list");
let categories = document.querySelectorAll(".category-list li");
const nameInput = document.querySelector("#Product-name");
const categoryInput = document.querySelector("#Category-name");
const priceInput = document.querySelector("#Product-Price");
const imageInput = document.querySelector("#Product-image");
const collectionType = document.querySelector(".prods-collectionType");
const productContainer = document.querySelector(".prod-container");
// toggle to show price dropdown list
priceBtn.onclick = () => priceList.classList.toggle("Hidden");

// toggle to show category dropdown list
categoryBtn.onclick = () => categoryList.classList.toggle("Hidden");

const searchButton = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");

//displayProducts is a impure function that create html elements.
function displayProducts(array) {
  productContainer.textContent = "";
  if (array) {
    // creating product HTML
    array.forEach((product) => {
      let productCard = document.createElement("div");
      productCard.classList.add("box");
      productCard.setAttribute("id", product.id);
      let productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productCard.append(productImg);
      let productInfo = document.createElement("div");
      productInfo.classList.add("prod-info");
      let sellerIcon = document.createElement("div");
      sellerIcon.classList.add("seller-icons");
      let deleteIcon = document.createElement("i");
      let editIcon = document.createElement("i");
      deleteIcon.classList.add("ri-delete-bin-fill", "delete");
      editIcon.classList.add("ri-edit-fill", "edit");
      sellerIcon.append(editIcon);
      sellerIcon.append(deleteIcon);
      productInfo.append(sellerIcon);
      let productTitle = document.createElement("h2");
      productTitle.classList.add("prod-title");
      productTitle.textContent = product.name;
      productInfo.append(productTitle);
      productInfo.style.paddingLeft = "15px";
      let productPargraph = document.createElement("p");
      productPargraph.classList.add("prod-category");
      productPargraph.textContent = product.category;
      productInfo.append(productPargraph);
      let rating = document.createElement("span");
      rating.classList.add("prod-rating");

      for (let index = 0; index < 5; index++) {
        let star = document.createElement("i");
        star.classList.add("ri-star-fill");
        rating.append(star);
      }

      productInfo.append(rating);
      let productPrice = document.createElement("span");
      productPrice.classList.add("prod-price");
      productPrice.textContent = product.price;

      productTitle.setAttribute("contenteditable", "true");
      productPargraph.setAttribute("contenteditable", "true");
      productPrice.setAttribute("contenteditable", "true");

      productInfo.append(productPrice);
      productCard.append(productInfo);
      productContainer.append(productCard);
      // +++++++++++++++++++++++++++++++++++++++++++++++++++++
      editIcon.addEventListener("click", () => {
        const id = productCard.getAttribute("id");
        let array = editProducts(productItems, id, {
          name: productTitle.innerHTML,
          category: productPargraph.innerHTML,
          price: productPrice.innerHTML,
        });
        localStorage.setItem("products", JSON.stringify(array));
        // displayProducts(array);
      });

      deleteIcon.addEventListener("click", () => {
        const id = productCard.getAttribute("id");
        let result = deleteProduct(productItems, id);
        localStorage.setItem("products", JSON.stringify(result));
        displayProducts(result);
      });
    });
  }
}
displayProducts(productItems);

addButton.onclick = () => {
  window.location.assign("addProduct.html");
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

collectionType.onclick = () => {
  productContainer.classList.toggle("prod-container");
  productContainer.classList.toggle("list-container");
};

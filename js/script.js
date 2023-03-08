// const  {
//     searchProducts,
//     priceFilter,
//     categoryFilter
// } = require ("../js/pureBuyer.js");

// console.log(searchProducts);
let productItems = JSON.parse(localStorage.getItem("products"));
let priceBtn = document.querySelector(".prods-price");
let categoryBtn = document.querySelector(".prods-category");
let priceList = document.querySelector(".price-list");
let priceRange = document.querySelectorAll(".price-list li");
let categoryList = document.querySelector(".category-list");
let categories = document.querySelectorAll(".category-list li");

function displayProducts(productItems) {
  const productContainer = document.querySelector(".prod-container");
  if (!productItems) {
    return;
  } else {
    productItems.forEach((product) => {
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

priceRange.forEach((price) => {
  let range = price.innerHTML.split("-"); //[m,m]
  price.onclick = () =>
    displayProducts(priceFilter(productItems, range[0], range[1]));
});

searchButton.onclick = () => {
  displayProducts(searchProducts(productItems, searchInput.value));
};

categories.forEach((category) => {
  category.onclick = () =>
    displayProducts(categoryFilter(productItems, category.innerHTML));
});

// toggle to show price dropdown list
priceBtn.onclick = () => priceList.classList.toggle("Hidden");

// toggle to show category dropdown list
categoryBtn.onclick = () => categoryList.classList.toggle("Hidden");

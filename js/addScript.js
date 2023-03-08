let productItems = JSON.parse(localStorage.getItem("products"));
if (!productItems) {
  productItems = [];
}
// console.log(productItems);
const add = document.querySelector(".addbtn");
const cancel = document.querySelector(".cancel");
const nameInput = document.querySelector("#Product-name");
const categoryInput = document.querySelector("#Category-name");
const priceInput = document.querySelector("#Product-Price");
const imageInput = document.querySelector("#Product-image");
add.addEventListener("click", () => {
  const productName = nameInput.value;
  const productCategory = categoryInput.value;
  const productPrice = priceInput.value;
  const productImage = imageInput.value;
  if (productName && productCategory && productPrice && productImage) {
    const product = {
      id: Date.now(),
      name: productName,
      category: productCategory,
      price: productPrice,
      image: `../images/${productImage}`,
    };
    localStorage.setItem(
      "products",
      JSON.stringify(AddProduct(productItems, product))
    );
  }

  //to clear all inputs.
  nameInput.value = "";
  categoryInput.value = "";
  priceInput.value = "";
  imageInput.value = "";
  //   displayProducts(productItems);
});
cancel.addEventListener("click", () => {
  window.location.assign("seller.html");
});

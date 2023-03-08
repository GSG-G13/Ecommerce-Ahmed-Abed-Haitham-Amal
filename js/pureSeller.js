function AddProduct(array, product) {
  if (Object.keys(product).length != 0) {
    array.push(product);
    return array;
  }
}

function searchProducts(array, productName) {
  if (array && productName) {
    const results = array.filter((product) =>
      product.name.includes(productName)
    );
    return results;
  }
}

function editProducts(array, id, newProduct) {
  if (
    array.length != 0 &&
    (id != -1 || id != undefined) &&
    Object.keys(newProduct).length != 0
  ) {
    console.log(newProduct, "new product");
    const result = array.map((product) => {
      if (product.id == id) {
        product.name = newProduct.name;
        product.category = newProduct.category;
        product.price = newProduct.price;
        // product.image = newProduct.image;
      }
      //   console.log(product, "product");
      return product;
    });
    return result;
  }
}

function deleteProduct(array, id) {
  if (id != undefined) {
    let result = array.filter((product) => product.id != id);
    return result;
  }
}

function priceFilter(array, startPrice, endPrice) {
  let result = array.filter(
    (product) => product.price >= startPrice && product.price <= endPrice
  );
  return result;
}

function categoryFilter(array, category) {
  let result = array.filter((product) => product.category == category);
  return result;
}

module.exports = {
  AddProduct,
  searchProducts,
  editProducts,
  deleteProduct,
  priceFilter,
  categoryFilter,
};

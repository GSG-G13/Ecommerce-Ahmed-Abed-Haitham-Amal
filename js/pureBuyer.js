function searchProducts(array, productName) {
    if (productName.length !== 0 ) {
         let result = array.filter((product) => 
             product.name.includes(productName)
         );
        return result;
    }
   
}

function priceFilter(array, startPrice, endPrice) {
    let result = array.filter((product) => product.price >= startPrice && product.price <= endPrice);
    return result;
}

function categoryFilter(array, category) {
    let result = array.filter((product) => product.category == category);
    return result;
}

module.exports = {
    searchProducts,
    priceFilter,
    categoryFilter
}
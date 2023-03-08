const {
  AddProduct,
  searchProducts,
  editProducts,
  deleteProduct,
  priceFilter,
  categoryFilter,
} = require("../js/pureSeller.js");

const products = [
  { id: 1, name: "test", category: "pants", price: 10 },
  { id: 2, name: "test2", category: "pants2", price: 20 },
];

describe("add product test", () => {
  test("should return undfined if the product is null", () => {
    const actual = AddProduct([], {});
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  test("should return [{id: 'jeans'}] if the { id: 'jeans' } is added", () => {
    const actual = AddProduct([], { id: "jeans" });
    const expected = [{ id: "jeans" }];
    expect(actual).toEqual(expected);
  });
  test("should return [{id: 'jeans'},{id: 'jeans2'}] if the { id: 'jeans2' } is added", () => {
    const actual = AddProduct([{ id: "jeans" }], { id: "jeans2" });
    const expected = [{ id: "jeans" }, { id: "jeans2" }];
    expect(actual).toEqual(expected);
  });
});

describe("edit product test", () => {
  test("should return undefiend if the array is null", () => {
    const actual = editProducts([], -1, {}); //array, id, newProduct
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  test("should return undefiend if the id is undefined and product is null", () => {
    const actual = editProducts(products, undefined, {}); //array, id, newProduct
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  test("should return undefiend if the id is -1 and product is null", () => {
    const actual = editProducts(products, -1, {}); //array, id, newProduct
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  test(`should return [
    { id: 1, name: "test", details: "details", price: 10 },
    { id: 2, name: "test3", details: "details3", price: 30 }
    ] if the id isn't -1 and product isn't null`, () => {
    const actual = editProducts(products, 2, {
      id: 2,
      name: "test3",
      category: "pants",
      price: 30,
    });
    const expected = [
      { id: 1, name: "test", category: "pants", price: 10 },
      { id: 2, name: "test3", category: "pants", price: 30 },
    ];
    expect(actual).toEqual(expected);
  });
});
describe("delete product test", () => {
  test("should return undefiend if the id is undefined", () => {
    const actual = deleteProduct(products, undefined); //array, id
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  test(`should return [
    { id: 1, name: "test", details: "details", price: 10 },
    ] if id = 2`, () => {
    const actual = deleteProduct(products, 2); //array, id
    const expected = [{ id: 1, name: "test", category: "pants", price: 10 }];
    expect(actual).toEqual(expected);
  });
});
describe("search product", () => {
  test("should retrun undefined if productName is null", () => {
    const actual = searchProducts([], "");
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  test("should retrun empty array of products if productName is exist", () => {
    const actual = searchProducts([], "jeans");
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should retrun array of products if productName is exist", () => {
    const actual = searchProducts([{ name: "jeans" }], "je");
    const expected = [{ name: "jeans" }];
    expect(actual).toEqual(expected);
  });
  test("should retrun array of products if productName is exist", () => {
    const actual = searchProducts([{ name: "jeans" }], "1");
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("price Filter", () => {
  test("should retrun [] if arry is empty", () => {
    const actual = priceFilter([], 0, 30);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should retrun [{ price: 10 }] if array product object is between the start and end price", () => {
    const actual = priceFilter(
      [{ price: 50 }, { price: 10 }, { price: 100 }],
      0,
      30
    );
    const expected = [{ price: 10 }];
    expect(actual).toEqual(expected);
  });
  test("should retrun [] if arry product object is not between the start and end price", () => {
    const actual = priceFilter(
      [{ price: 50 }, { price: 120 }, { price: 100 }],
      0,
      30
    );
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("Categotry Filter", () => {
  test("should retrun [] if arary is empty", () => {
    const actual = categoryFilter([], "Shoes");
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should retrun [] if product cateogry is empty", () => {
    const actual = categoryFilter(
      [{ category: "Shoes" }, { category: "Pants" }, { category: "Jakets" }],
      ""
    );
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should retrun [] if product cateogry doesnt found in the array", () => {
    const actual = categoryFilter(
      [{ category: "Shoes" }, { category: "Pants" }, { category: "Jakets" }],
      "Hats"
    );
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("should retrun [{ category: 'Pants'}] if product cateogry doesnt found in the array", () => {
    const actual = categoryFilter(
      [{ category: "Shoes" }, { category: "Pants" }, { category: "Jackets" }],
      "Pants"
    );
    const expected = [{ category: "Pants" }];
    expect(actual).toEqual(expected);
  });
});

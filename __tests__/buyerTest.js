const  {
    searchProducts,
    priceFilter,
    categoryFilter
} = require ("../js/pureBuyer.js");

describe('search product', () => {
    test('should retrun undefined if productName is null', () => {
        const actual = searchProducts([],'');
        const expected = undefined;
        expect(actual).toEqual(expected);
    });
    test('should retrun empty array of products if productName is exist', () => {
        const actual = searchProducts([], 'jeans');
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test('should retrun array of products if productName is exist', () => {
        const actual = searchProducts([{name:'jeans'}], 'je');
        const expected = [{name:'jeans'}];
        expect(actual).toEqual(expected);
    });
    test('should retrun array of products if productName is exist', () => {
        const actual = searchProducts([{name:'jeans'}], '1');
        const expected = [];
        expect(actual).toEqual(expected);
    });
});

describe('price Filter', () => {
    test('should retrun [] if arry is empty', () => {
        const actual = priceFilter([],0,30);
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test('should retrun [] if arry product object is between the start and end price', () => {
        const actual = priceFilter([{price: 50},{price: 10},{price: 100}],0,30);
        const expected = [{price: 10}];
        expect(actual).toEqual(expected);
    });
    test('should retrun [] if arry product object is not between the start and end price', () => {
        const actual = priceFilter([{price: 50},{price: 120},{price: 100}],0,30);
        const expected = [];
        expect(actual).toEqual(expected);
    });
    
});

describe('Categotry Filter', () => {
    test('should retrun [] if arary is empty', () => {
        const actual = categoryFilter([],'Shoes');
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test('should retrun [] if product cateogry is empty', () => {
        const actual = categoryFilter([{category:'Shoes'},{category:'Pants'},{category:'Jakets'},],'');
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test('should retrun [] if product cateogry doesnt found in the array', () => {
        const actual = categoryFilter([{category:'Shoes'},{category:'Pants'},{category:'Jakets'},],'Hats');
        const expected = [];
        expect(actual).toEqual(expected);
    });
    test('should retrun [] if product cateogry doesnt found in the array', () => {
        const actual = categoryFilter([{category:'Shoes'},{category:'Pants'},{category:'Jackets'},],'Pants');
        const expected = [{category:'Pants'}];
        expect(actual).toEqual(expected);
    });
    
});
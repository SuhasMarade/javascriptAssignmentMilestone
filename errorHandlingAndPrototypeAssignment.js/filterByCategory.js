let products = [
    { name: "Shirt", category: "Clothing"},
    { name: "Pants", category: "Clothing"},
    { name: "Hat", category: "Accessories"},
    { name: "Sunglasses", category: "Accessoris"}
];

function filterByCategory(products){
    function selectCategory(category){
     let filterProduct = products.filter((ele) => {
        return ele.category === category;
        })
        return filterProduct
    }
    return selectCategory;
}

let clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);

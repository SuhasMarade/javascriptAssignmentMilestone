let cart = ['bag', 'shoes', 'pendrive', 'bag', 'shoes', 'book'];
function removeDuplicates(cart){
    return cart.filter((item, index) => 
        cart.indexOf(item) === index)
}
console.log(removeDuplicates(cart))
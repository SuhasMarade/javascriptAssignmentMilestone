let cart = [{shampoo:100, qty:1}, {snacks:50, qty:4}, {shirt:500, qty:2}, {pants:700, qty:2}]
function totalPrice(cart){
    let sum = 0;
    for(let i = 0; i < cart.length; i++){
        let prod = 1;
        let arr = Object.values(cart[i])
        for(let j = 0; j < arr.length; j++){
            prod *= arr[j]
        }
        sum += prod
    }
    return sum;
}
let ans = totalPrice(cart);
console.log(ans);
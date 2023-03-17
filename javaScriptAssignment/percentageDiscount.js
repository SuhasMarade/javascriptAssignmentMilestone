let productPrice = 1000;
let discountPrice = 850;
const discount = (productPrice, discountPrice) => {
    let ans = ((productPrice - discountPrice)/productPrice) * 100;
    return ans;
};
console.log(discount(productPrice, discountPrice));
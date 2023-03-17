let quantity = [1, 5, 3, 5, 2, 9];
function doubleQuantity(quantity){
    let correctQty = [];
    for(let i = 0; i < 6; i++){
        correctQty.push(2 * quantity[i]);     
    }
    return correctQty;
    
}
console.log(doubleQuantity(quantity));
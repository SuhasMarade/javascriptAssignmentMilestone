let dishes = {icecream:300, paneerBhaji:200, butterMasala:250, roti: 100,};
let noOfPeople = 6;
function billSplitter(dishes, noOfPeople){
    let val = Object.values(dishes);
    let sum = 0;
    for(let i = 0; i < val.length; i++){
        sum += val[i];
    }
    let individual = sum/noOfPeople;
    return ({totalBill:sum, priceForEachPerson: individual });
}
let ans = billSplitter(dishes, noOfPeople);
console.log(ans);
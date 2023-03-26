let x = 5;
let y = 10;
function swapFuntion(...args){
    let [x,y] = args;
     [x,y] = [y,x];
     return [x,y];
}
console.log(swapFuntion(x,y));
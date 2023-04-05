function doubleValInArray(arr,fn){
    return fn(arr);
}
function fn(arr){
    let newArray = arr.map((ele) => {
         return ele*2;
    })
    return newArray
}
console.log(doubleValInArray([1,2,3,4], fn));
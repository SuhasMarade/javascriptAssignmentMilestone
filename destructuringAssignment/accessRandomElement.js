let arr = [1,2,3,4,5];
function accessRandomElement(arr){
    let [x,y,,,z] = arr;
    return [x,y,z];
}
console.log(accessRandomElement(arr));
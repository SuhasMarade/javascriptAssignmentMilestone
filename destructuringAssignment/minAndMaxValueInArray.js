let arr = [5,2,7,1,9]
function minMaxValue(arr){
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    return ({max : maxVal, min: minVal});
}
console.log(minMaxValue(arr));
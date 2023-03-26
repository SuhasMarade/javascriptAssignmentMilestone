let str = "hello world beautiful world the best friend the best book small world small word big word friend friend friend"
let arr = str.split(" ");
let set = new Set(arr);
let arr1 = Array.from(set);
function countVal(arr1, arr){
    let countArr = [];
    for(let i = 0; i < arr1.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr1[i] === arr[j]){
                count++;
            }
        }
        countArr.push(count);
    }
    return countArr;
}
let countValArray = countVal(arr1, arr);
function countOccurence(arr1, countValArray){
    let twoDArray = [];
    for(let i = 0; i < arr1.length; i++){
        twoDArray.push([arr1[i], countValArray[i]]);
    }
    let myMap = new Map(twoDArray);
    return myMap;
}
let mapOccurence = countOccurence(arr1, countValArray);
console.log(mapOccurence);
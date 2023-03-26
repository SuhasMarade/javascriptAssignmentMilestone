let arr = [1,2,4,8,2,8,9,10,3,9,9,5];
const removeDuplicates = (arr) =>{
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));
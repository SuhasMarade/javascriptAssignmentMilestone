const str = "booking";
const vowels = ['a', 'i', 'e', 'o', 'u'];
let count = 0;
for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
        count++;
    }
}
console.log(count);
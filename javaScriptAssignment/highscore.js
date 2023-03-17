let marks = [22, 25, 30, 27, 24];
let maxM = 0;
for(let i = 0; i < 5; i++){
    (maxM < marks[i]) ?
        (maxM = marks[i]) : (maxM = maxM);
}
console.log(maxM);
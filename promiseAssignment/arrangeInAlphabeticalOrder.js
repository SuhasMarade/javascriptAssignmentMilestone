function inAlphabeticalOrder(arr, sortFn){
    let newArray = arr.map((ele) => ele.title);
    return sortFn(newArray);
}

function sortFn(arr){
    let newArray = arr.sort();
    return newArray;
}
let arr = [{title:"Secret", author: "Ramesh", year: 2010}, {title:"Wonder", author: "Sagar", year: 2020}, {title:"GOAT", author: "Amit", year: 2015}, {title:"Eagle vision", author: "Manoj", year: 2013}, {title:"Magic", author: "Thomson", year: 2011}
]
console.log(inAlphabeticalOrder(arr, sortFn));
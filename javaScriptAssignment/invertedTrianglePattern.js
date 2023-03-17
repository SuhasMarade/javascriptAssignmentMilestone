let rows = 6;
let string = "";

// External loop
for (let i = rows; i >= 0; i--) {
  
  // printing star
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
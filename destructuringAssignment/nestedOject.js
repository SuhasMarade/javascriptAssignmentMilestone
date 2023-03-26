const person = {
   name: "Mithun",
   age: 21,
   address: {
    street:"B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
   } ,
};
function addressObj({name, address:{
    street,
}}){
    return ({name:name, address:street})
}
console.log(addressObj(person));
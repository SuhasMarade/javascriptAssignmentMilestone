let userName = 'Suhas';
let letter = userName.charAt(0)
if('A'<= letter && letter <='Z'){
    console.log(userName);
}
else{
    let capitalise = userName.charAt(0).toUpperCase() + userName.slice(1);
    console.log(capitalise);
}
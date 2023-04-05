function ageInDays(obj, logResult){
    let fullName = `${obj.firstName} ${obj.LastName}`;
    let ageInDays = 365 * obj.age;
    let newObj = { fullName: fullName, ageInDays: ageInDays};
    logResult(newObj);
}
function logResult(obj){
    console.log(`The person's full name is ${obj.fullName}, and their age in days is ${obj.ageInDays}.`)
}
person = {
    firstName : "Mithun",
    LastName: "Sagar",
    age: 25
}
ageInDays(person,logResult);
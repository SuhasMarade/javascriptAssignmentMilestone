function getPerson({name, age}){
    let ageType = typeof(age);
    let nameType = typeof(name);
    if((ageType === 'undefined') || (nameType === 'undefined') || (nameType !== 'string') || isNaN(age)){
            throw new Error("Invalid parameter type");
        }
    return `Name: ${name}, age: ${age}`;
}try {
    console.log(getPerson({name: "Mithun" , age: 20}));
} catch (err) {
    console.log(err.message)
}

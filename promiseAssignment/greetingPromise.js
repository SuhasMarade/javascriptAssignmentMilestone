function greetingPromise(name){
    return new Promise(function exec(resolve, reject){
        if(typeof(name) === 'string'){
            resolve(name);
        }else{
            reject("Not a String");
        }
    });
}
let x = greetingPromise("Mithun");
x.then(function(value){
    console.log(value);
}).catch(function(err){
    console.log("Error Handled", err)
})
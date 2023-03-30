function convertToNumber(str){
    let x = Number(str);
    return x;
}

try {
    let val = convertToNumber("123");
    if(isNaN(val)){
        throw new Error("Invalid number")     
    }
    else{
        console.log(val);     
    }   
 }  catch(err){
    console.log(err.message);
}
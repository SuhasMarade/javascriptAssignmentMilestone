function manipulateString(str, logString){
    logString(str);
}
function logString(str){
    let newString = str.toUpperCase();
    console.log(`The manipulated string is: ${newString}`);
}
manipulateString("hello, world!",logString);
let num1 = 4;
let num2 = 3;
let key = '+';
let ans = 0;
switch (key) {
    case '+':
        ans = num1 + num2;
        console.log(ans);
        break;
    case '-':
        ans = num1 - num2;
        console.log(ans);
        
        break;
    case '*':
        ans = num1 * num2;
        console.log(ans);
        
        break;
    case '/':
        ans = num1 / num2;
        console.log(ans);
        
        break;

    default:
        console.log("Invalid operator");
        break;
}
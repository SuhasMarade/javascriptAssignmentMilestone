let acctDetail = {name:'sanket', balance:10000};
let balance = acctDetail.balance;
function updateAcct(transaction, balance, amount, acctDetail){
    let changeInAmt = 0;
    if(transaction === 'withdrawl'){
        changeInAmt = balance - amount;
        acctDetail.balance = changeInAmt
    }
    else if(transaction === 'deposit'){
        changeInAmt = balance + amount;
        acctDetail.balance = changeInAmt
    }
    else{
        acctDetail.balance = balance;
    }
};
updateAcct('deposit', balance, 1000, acctDetail);
console.log(acctDetail);
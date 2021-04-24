let num1=parseInt(prompt("Enter any number"));
let num;
function check(num1) {
    num=(num1%2==0)?'Even':'Odd';
    return num;
}

let result=check(num1);
console.log("The given number is " +num);
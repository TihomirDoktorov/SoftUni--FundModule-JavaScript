function factorial(num,num1){
let factNum = 1;
let factNum1 = 1;

for (let i =  2; i <=num; i++) {
    factNum *= i;
}

for (let i =  2; i <=num1; i++) {
    factNum1 *= i;
}

console.log((factNum/factNum1).toFixed(2));
}

factorial(5,2);
function printAndSum(num1,num2){
    let sum = num1;
    let numbers = String(num1);
    for(let i=num1+1; i<=num2; i++){
        numbers+=` ` + i;
        sum+=i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10);






//Write a function that displays numbers from given start to given end and their sum.
// The input comes as two number parameters. Print the result like the examples below:
/*5, 10	5 6 7 8 9 10
Sum: 45
0, 26	0 1 2 … 26
Sum: 351
50, 60	50 51 52 53 54 55 56 57 58 59 60
Sum: 6058*/

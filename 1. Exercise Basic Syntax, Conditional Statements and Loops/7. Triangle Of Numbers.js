function triangleOfNumbers(num){
let row = String(``);
    for(let i=1; i<=num; i++){
        for(let j=1; j<=i; j++){
            row += i + ` `;       
        }
        console.log(row);
        row = String(``);
    }
    
}

triangleOfNumbers(3);






//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
/*3	1
2 2 
3 3 3		5	1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5		6	1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6*/

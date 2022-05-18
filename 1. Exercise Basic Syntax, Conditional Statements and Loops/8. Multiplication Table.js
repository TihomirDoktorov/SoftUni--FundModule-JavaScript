function table(num){
    let number = Number(num);
    let multiplication = String(``);
    let sum = Number(0);

    for(let i=1; i<=10; i++){
        multiplication = number + ` X ` + i + ` = `;
        sum = number*i;
        console.log(multiplication+sum);

    }
}

table(5);




//You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.
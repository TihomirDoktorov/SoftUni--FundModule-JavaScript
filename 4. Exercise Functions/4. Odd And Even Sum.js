function sum(num) {
    let oddSum =0;
    let evenSum = 0;
    let number = num.toString().split('').map(Number);
    for (let i = 0; i < number.length; i++) {
        if(number[i]%2==0){
            evenSum += number[i];
        }
        else {
            oddSum += number[i];
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sum(1000435);

function addAndSubtract(num1, num2, num3){
    function subtract(first, second) {
    return first - second;
    }

    function sum(first, second) {
    return first + second;
    }
    let result = sum(num1,num2);
    result = subtract(result,num3);
    console.log(result)
}

addAndSubtract(23, 6, 10);

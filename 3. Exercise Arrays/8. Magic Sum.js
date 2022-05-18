function magic(arr,currentNumber){
    let firstNumber =0;
    let secondNumber =0;
    for(let j =0; j < arr.length; j++){
        firstNumber = arr[j];
        for(let k =0; k < arr.length;k++){
        secondNumber = arr[k];
            if(firstNumber+secondNumber==currentNumber){
                arr.splice(arr.indexOf(firstNumber),1)
                arr.splice(arr.indexOf(secondNumber),1)
                console.log(`${firstNumber} ${secondNumber}`)
                j=-1;
                k=-1;
                break;

                }
        }
    }
}

//magic([1,7,6,2,19,23],8);
magic([14,20,60,13,7,19,8],27);
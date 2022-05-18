function sum(num){
    let number = String(num);
    let strArray = number.split("");
    let sum = 0;
    for(let i=0; i<=(number.length - 1) ; i++){
        sum+= Number(strArray[i]);
    }
    console.log(sum);
}
sum(`245678`);
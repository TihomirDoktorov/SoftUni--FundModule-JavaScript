function division(number){
    let biggest = 0;
    if(number%2==0){
        biggest = 2;
    }
    if(number%3==0){
        biggest = 3;
    }
    if(number%2==0 && number%3==0){
        biggest = 6;
    }
    if(number%7==0){
        biggest=7;
    }
    if(number%2==0 && number%5==0){
        biggest = 10;
    }
    if(biggest==0){
        console.log(`Not divisible`);
    }
    else console.log(`The number is divisible by ${biggest}`); 
}   
    division(30);


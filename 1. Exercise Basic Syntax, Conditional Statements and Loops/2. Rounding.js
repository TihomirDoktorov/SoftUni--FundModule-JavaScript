function rounding(number, precision){
    let num = number;
    let prec = precision;
    if(prec>15){
        prec = 15;
    }
    console.log(parseFloat(num.toFixed(prec)))
}
rounding(10.5,3);
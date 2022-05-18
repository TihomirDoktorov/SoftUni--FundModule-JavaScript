function vacation(people,type,day){
let discount = 1;
let free = false;
let price=0;
    if(type==`Students`){
        if(people>=30){
            discount = 0.85;
        }
        if(day==`Friday`){
            price=people*8.45*discount;
        }
        else if(day==`Saturday`){
            price=people*9.80*discount;
        }
        else if(day==`Sunday`){
            price=people*10.46*discount;
        }
    }
    else if(type==`Business`){
        if(people>=100){
            free = true;
            people-=10;
        }
        if(day==`Friday`){
            price=people*10.90*discount;
        }
        else if(day==`Saturday`){
            price=people*15.60*discount;
        }
        else if(day==`Sunday`){
            price=people*16*discount;
        }
    }
    else if(type==`Regular`){
        if(people>=10 && people<=20){
            discount = 0.95;
        }
        if(day==`Friday`){
            price=people*15*discount;
        }
        else if(day==`Saturday`){
            price=people*20*discount;
        }
        else if(day==`Sunday`){
            price=people*22.50*discount;
        }
    }
    console.log(`Total price: ${price.toFixed(2 )}`);
}
vacation(40,`Regular`,`Saturday`);
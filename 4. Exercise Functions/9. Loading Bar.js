function bar(num){
    let progress = num/10;
    let bar = [];

    for (let i = 0; i < progress; i++) {
        bar.push(`%`);
        
    }

    for (let i = progress; i < 10; i++) {
        bar.push(`.`);
    }

    if(num!=100){
        console.log(`${num}% [${bar.join(``)}]`);
        console.log(`Still loading...`)
    }
    else{
        console.log(`100% Complete!`)
    }
    
}

//bar(30);
//bar(50);
bar(100);
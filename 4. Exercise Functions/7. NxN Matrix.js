function matrix(num){
    let row = [];
    for (let i = 0; i < num; i++) {
        row[i] = num;
    }
    for (let j = 0; j < num; j++) {
        console.log(row.join(` `));
        
    }
}

matrix(3);
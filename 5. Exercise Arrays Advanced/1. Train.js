function train(arr){
    let wagons = arr.splice(0,1).join(' ').split(' ');
    let capacity = arr.splice(0,1);
    let commands = arr.join(' ').split(' ');
    let numberOfComands = commands.length;
    for(let i=0; i<numberOfComands; i++){
        if(commands[i]=='Add'){
            wagons.push(commands[i+1]);
            i++;
        }
        else{
            for(let j=0; j<wagons.length;j++){
                if(Number(wagons[j])+Number(commands[i])>Number(capacity)){
                    continue;
                }
                else{
                    wagons[j] = String(Number(wagons[j])+Number(commands[i]));
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
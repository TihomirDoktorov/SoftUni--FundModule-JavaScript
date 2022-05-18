function party(arr){
    let list = [];
        for(let i =0; i<arr.length;i++){
            let curCommand = arr[i].split(" ");
            if(curCommand[2]!='not'){
                if(list.includes(curCommand[0])){
                    console.log(`${curCommand[0]} is already in the list!`);
                    continue;
                }
                list.push(curCommand[0]);
            }
            else{
                if(list.includes(curCommand[0])){
                    let currentIndex = list.indexOf(curCommand[0]);
                    list.splice(currentIndex,1);
                    continue;
                }
                console.log(`${curCommand[0]} is not in the list!`)
            }
        }
        for(let j =0; j<list.length;j++){
            console.log(list[j]);
        }
}

/*party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)*/

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
function sequence(array){
    let maxSequence = [];
    let maxSequence2 = [];
    let currentNumber = 0;
    let index =0;
    let count =0;
    let count2 =0;

    for(let i = 0; i < array.length;i++){
        currentNumber = array[i];
        index  = i;
        if(currentNumber == array[index+1]){
            for(let j = index; array.length; j++){
                if(currentNumber != array[j]){
                    break;
                }
                count2++;
                maxSequence2.push(array[j])
            }
        }
        
        if(count2>count){
            count=count2;
            maxSequence=maxSequence2;
            count2=0;
            maxSequence2=[];
        }
        if(count2=count){
            count2=0;
            maxSequence2=[];
        }
    }
    console.log(maxSequence.join(` `))
}

sequence([2,1,1,2,3,3,2,2,2,1])
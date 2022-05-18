function bomb(arr,arr1){
let result = 0;
let bombNumber = arr1[0];
let power = arr1[1];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==bombNumber){
        let indexOfBomb = arr.indexOf(arr[i]);
        let bombStart = indexOfBomb-power;
        let bombEnd = (2*power)+1;
        if(bombStart<0){
            bombEnd += bombStart;
            bombStart = 0; 
        }
        arr.splice(bombStart,bombEnd)
        i=-1;
    }
}
for (let k = 0; k < arr.length; k++) {
    result += arr[k];
}
console.log(result);
}

//bomb([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
//bomb([1, 4, 4, 2, 8, 9, 1],[9, 3]);
//bomb([1, 7, 7, 1, 2, 3],[7, 1]);
//bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);
//bomb([1,2,2,4,2,2,2,9],[1,2]);
bomb([1,2,2,4,3,3,3,9],[2,3]);
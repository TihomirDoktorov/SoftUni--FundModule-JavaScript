function sort(arr){
    let sorted = [];
    let count = arr.length;
    for(let i =0; i<count;i++){
        if(i%2==0){
            arr.sort((a,b) => b - a);
            sorted.push(arr.shift());
        }
        else{
            arr.sort((a,b) => a - b);
            sorted.push(arr.shift())
        }
    }
    console.log(sorted.join(' '));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
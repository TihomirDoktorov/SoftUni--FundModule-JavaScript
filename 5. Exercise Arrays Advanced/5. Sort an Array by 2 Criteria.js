function sort(arr){
    arr.sort();
    arr.sort((a,b) => a.length - b.length);
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }
}  

sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
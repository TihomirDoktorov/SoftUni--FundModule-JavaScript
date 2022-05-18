function remove(arr){
    for(let i =0; i<arr.length;i++){
        for(let j =i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--
            }
        }
    }
    console.log(arr.join(' '));
}

//remove([20, 8, 12, 13, 4, 4, 8, 5]);

remove([7, 8, 9, 7, 2, 3, 4, 1, 2]);
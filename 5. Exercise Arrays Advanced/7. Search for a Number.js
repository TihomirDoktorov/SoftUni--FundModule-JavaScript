function search(arr,arr1){
let numTake = arr1[0];
let numDel = arr1[1];
let numSearch = arr[2];

let list = arr.splice(0, numTake);
list = list.splice(numDel);
let occurs = 0;
for (let i = 0; i < list.length; i++) {
    if(list[i]===numSearch){
        occurs++;
    }
}
console.log(`Number ${numSearch} occurs ${occurs} times.`)
}

search([5, 2, 3, 4, 1, 6],[5, 2, 3]);
//search([7, 1, 5, 8, 2, 7],[3, 1, 5]);
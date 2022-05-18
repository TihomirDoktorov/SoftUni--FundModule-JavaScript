function top(arr) {
  
  let wrongNumbers = [];
  let rightNumbers = [];

  for(let i = 0; i < arr.length; i++){
    for(let j= i+1; j < arr.length; j++){
      if(arr[i]<=arr[j]){
        wrongNumbers.push(arr[i]);
        break;
      }
    }
  }

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < wrongNumbers.length; j++){
      if(arr[i]==wrongNumbers[j]){
        rightNumbers = arr.splice(i,1);
      }
    }
  }

 
 console.log(arr.join(` `));
}

top([14
  ,24
  ,3
  ,19
  ,15
  ,17]);
//top([1,4,3,2]);

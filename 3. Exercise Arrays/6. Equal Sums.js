function find(array) {
    let arrLeft = [];
    let arrRight = [];
    let sumLeft = 0;
    let sumRight = 0;
    let index = 0;
    let result = false;
  for (let i=0; i < array.length; i++) {
      index = i;
    arrLeft = array.slice(0, index);
    arrRight = array.slice(index+1, array.length);
    for(let j=0; j< arrLeft.length;j++){
        sumLeft+=arrLeft[j];
    }
    for(let k=0; k< arrRight.length;k++){
        sumRight+=arrRight[k];
    }
    if(sumLeft==sumRight){
        console.log(index);
        result = true;
        break;
    }
    else{
        sumLeft =0;
        sumRight =0;
    }
  }
  if(!result){
      console.log(`no`)
  }
}

find([1, 2, 3, 3]);
//find([1,2]);

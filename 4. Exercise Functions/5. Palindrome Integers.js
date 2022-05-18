function palindrome(arr) {
    let palindrome = true;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].toString().split("").map(Number);
    for (let j = 0; j < element.length; j++) {
      let start = j;
      let end = element.length-1;
      if (element[start]!=element[end]) {
          console.log(false);
          palindrome = false;
          break;
      }
      end--;
      if(start=end){
          break;
      }
      else if(end<start){
        console.log(`true`);
      }
    }
    if(palindrome){
        console.log(true);
    }
    else{
        palindrome = true;
    }
  }
}

//palindrome([123,323,421,121]);
palindrome([32, 2, 232, 1010]);

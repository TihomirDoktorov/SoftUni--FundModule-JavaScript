function addSubtract(arr) {
  let arr1 = arr;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] % 2 == 0) {
      sum1 += arr1[i];
      arr1[i] += i;
      sum2 += arr[i];
    } else {
      sum1 += arr[i];
      arr1[i] -= i;
      sum2 += arr[i];
    }
  }
  console.log(arr1);
  console.log(sum1);
  console.log(sum2);
}

addSubtract([5, 15, 23, 56, 35]);

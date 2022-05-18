function rotation(arr1, rotation1) {
  let first = 0;
  let string1 = ``;
  for (let i = 0; i < rotation1; i++) {
    first = arr1.shift();
    arr1.push(first);
  }
  for (let i = 0; i <= arr1.length - 1; i++) {
    string1 += arr1[i] + ` `;
  }
  console.log(string1);
}
rotation([51, 47, 32, 61, 21], 2);

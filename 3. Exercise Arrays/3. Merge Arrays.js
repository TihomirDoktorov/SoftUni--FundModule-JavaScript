function merge(arr1, arr2) {
  let arr3 = [];
  let string1 = ``;
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (i % 2 == 0 || i == 0) {
      arr3.push(Number(arr1[i]) + Number(arr2[i]));
    } else arr3.push(arr1[i] + arr2[i]);
  }
  string = arr3[0];
  for (let i = 1; i <= arr3.length - 1; i++) {
    string += ` - ${arr3[i]}`;
  }
  console.log(string);
}
merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

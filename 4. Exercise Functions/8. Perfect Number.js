function find(num) {
  let numbers = [];
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      numbers.push(i);
    }
  }

  for (let j = 0; j < numbers.length; j++) {
    sum += numbers[j];
  }

  if (sum == num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}

//find(6);
//find(28);
find(1236498);

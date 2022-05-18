function inRange(input, input1) {
  let firstNum = input.charCodeAt();
  let secondNum = input1.charCodeAt();
  let characters = [];
  let count = 0;
  if (firstNum >= secondNum) {
    for (let i = secondNum + 1; i < firstNum; i++) {
      characters[i] = String.fromCharCode(i);
    }
  } else if (secondNum > firstNum) {
    for (let i = firstNum + 1; i < secondNum; i++) {
      characters[count] = String.fromCharCode(i);
      count++;
    }
  }
  console.log(characters.join(` `));
}

//inRange("a", "d");
inRange("#", ":");

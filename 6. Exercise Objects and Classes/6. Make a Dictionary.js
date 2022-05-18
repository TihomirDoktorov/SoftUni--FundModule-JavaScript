function solve(arr) {
  let listOfObjects = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let product = element
      .replace(`{"`, ``)
      .replace(`":"`, `:`)
      .replace(`"}`, ``)
      .toString()
      .split(`:`);
    if (listOfObjects.includes(product[0])) {
      for (let i = 0; i < listOfObjects.length; i++) {
        const element = listOfObjects[i];
        if(element.name==product[0]){
          element.discription = product[1];
          break;
        }
      }
    } else {
      let object = {};
      object.name = product[0];
      object.discription = product[1];
      listOfObjects.push(object);
    }
  }

  listOfObjects.sort((a, b) => a.name.localeCompare(b.name));

  for (const object of listOfObjects) {
    console.log(`Term: ${object.name} => Definition: ${object.discription}`);
  }
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"A hottttttt drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
]);

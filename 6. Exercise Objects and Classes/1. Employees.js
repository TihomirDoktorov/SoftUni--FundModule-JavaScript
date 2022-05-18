function employees(arr) {
  let listOfEmployees = {};

  for (let i = 0; i < arr.length; i++) {
      listOfEmployees.name = arr[i];
      listOfEmployees.personalNumber = arr[i].length;
      console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`)
  }

}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

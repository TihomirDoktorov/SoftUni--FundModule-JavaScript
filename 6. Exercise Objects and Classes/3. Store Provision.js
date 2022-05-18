function test(arr1, arr2) {
  let currStock = arr1;

  let ordereProducts = arr2;

  let products = {};

  for (let i = 0; i < currStock.length; i += 2) {
    const key = currStock[i];
    const value = currStock[i+1]
    products[key] = currStock[i + 1];
  }

  for (let i = 0; i < ordereProducts.length; i += 2) {
    const key = ordereProducts[i];
    const value = ordereProducts[i + 1];
    if (products.hasOwnProperty(ordereProducts[i])) {
      products[key] = Number(products[key]) + Number(ordereProducts[i + 1]);
    }
    else{
      products[key] = value;
    }
  }

  for (let entries of Object.entries(products)) {
    console.log(`${entries[0]} -> ${entries[1]}`);
  }
}

test(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

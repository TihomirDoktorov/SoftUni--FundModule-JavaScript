function test(arr){
let array = arr.join(` | `).split(` | `);
let towns = {};

for (let i = 0; i < array.length; i++) {
    towns.town = array[i];
    towns.latitude = Number(array[i+1]).toFixed(2);
    towns.longitude = Number(array[i+2]).toFixed(2);
    console.log(towns);
    i += 2;
}
}

test(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
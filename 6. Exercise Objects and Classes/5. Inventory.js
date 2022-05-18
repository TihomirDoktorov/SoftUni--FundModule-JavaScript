function solve(arr){
    let heroes = {};
    let heroItems = [];
    let listOfObjects = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let heroName = element.split(` / `)[0]
        let heroLevel = element.split(` / `)[1]
        let heroItems = element.split(` / `)[2]
        listOfObjects.push({name: heroName, level: heroLevel, items: heroItems})

    }
    listOfObjects.sort((a,b) => a.level - b.level)
    for(const element of listOfObjects){
        console.log(`Hero: ${element.name}`)
        console.log(`level => ${element.level}`)
        console.log(`items => ${element.items}`)
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
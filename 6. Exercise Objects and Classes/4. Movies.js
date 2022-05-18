function solve(input) {
  let data = []

  for (let i = 0; i < input.length; i++) {
    if(input[i].includes(`addMovie`)){
      let name = input[i].split(`addMovie `)[1]
      data.push({name: name})
    }
    else if(input[i].includes(`directedBy`)){
      let director = input[i].split(` directedBy `)[1]
      let name = input[i].split(` directedBy `)[0]
      let movie = data.find((movieObj) => movieObj.name === name)
      if(movie){
        movie.director = director;
      }
    }
    else if(input[i].includes(`onDate`)){
      let date = input[i].split(` onDate `)[1]
      let name =  input[i].split(` onDate `)[0]
      let movie = data.find((movieObj) => movieObj.name === name)
      if(movie){
        movie.date = date;
    }
  }
}
for(const datas of data){
  if(datas.name && datas.date && datas.director){
    console.log(JSON.stringify(datas));
  }
}
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
])

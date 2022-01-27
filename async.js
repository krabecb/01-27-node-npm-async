  //-----ASYNC/AWAIT-----

  const url = "https://pokeapi.co/api/v2/pokemon/7";

//   fetch(url)
//   .then(response => {
//       console.log(response)
//       return response.json()
//   })
//   .then(jsonData => {
//       console.log(jsonData)
//   })

  //Async/await is syntactic sugar for .then() 
  //The main goal is simplify our request to an API
  //Regular function syntax:
  //async function fetchToAPI() {}

  //Async indicates that we will be working with tasks that need time, such as fetching to an API
  //Await is a necessary keyword that resolves tasks that take time such .json, fetch()

  let pokemonArr = []

  const fetchToAPI = async () => {
      const pokemonResponse = await fetch(url)
      const jsonData = await pokemonResponse.json()
      pokemonArr = jsonData.abilities
      console.log(pokemonArr)
    //   pokemonArr.forEach(element => {
    //       let header = document.createElement("h1")
    //       header.innerText = `${element.ability.name}`
    //       document.body.append(header)
    //   });
      for (let i = 0; i < pokemonArr.length; i++) {
        let header = document.createElement("h1")
        header.innerText = `${pokemonArr[i].ability.name}`
        document.body.append(header)
      }
  }

  fetchToAPI()

  console.log("Here is my console log in the global scope outside of the async function", pokemonArr)


const fetckPokemon = () =>{
    const url = id = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(url)
    .then(response => response.json())
    .then(pokemon =>{
        console.log(pokemon)
    })

}

fetckPokemon()
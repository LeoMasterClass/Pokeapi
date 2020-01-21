const POKEMON = document.getElementById('pokemon');

for(let i = 0; i < 150; i++) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(function (response) {
    return response.json()
  }).then(function (json) {
    let pName = document.createElement('p');
    pName.innerText = json.name;

    let imgPokemon = document.createElement('img');
    imgPokemon.src = json.sprites.front_shiny;

    POKEMON.appendChild(pName)
    POKEMON.appendChild(imgPokemon)
  });
}
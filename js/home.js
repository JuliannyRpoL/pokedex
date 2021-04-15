const xhttp = new XMLHttpRequest();
let pokemons;

xhttp.open("GET", "pokemons_info.json", true)
xhttp.send();

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        pokemons = JSON.parse(this.responseText)
        modifyActualPokemon(0);
    }
}

function modifyColors (id) {
    let headerContainer = document.getElementById("header-container")
    let mainContainer = document.getElementById("main-container")
    let pokemonName = document.getElementById("pokemon-name")
    let pokemonDetails = document.getElementById("pokemon-details")
    
    switch (id) {
        case 0:
            headerContainer.style.backgroundColor = "#2F2044"
            mainContainer.style.backgroundImage = 'linear-gradient( #442E63, #1C1723)';
            pokemonName.style.backgroundColor = "#7A6992";
            pokemonDetails.style.backgroundColor = "#7A6992"
            break;
        case 1:
            headerContainer.style.backgroundColor = "#315258"
            mainContainer.style.backgroundImage = 'linear-gradient( #2D6D79 ,#0E2933)';
            pokemonName.style.backgroundColor = "#678C93";
            pokemonDetails.style.backgroundColor = "#678C93"
            break;
        case 2:
            headerContainer.style.backgroundColor = "#2D5231"
            mainContainer.style.backgroundImage = 'linear-gradient( #37803F ,#1F4F24)';
            pokemonName.style.backgroundColor = "#709974";
            pokemonDetails.style.backgroundColor = "#709974"
            break;            
        case 3:
            headerContainer.style.backgroundColor = "#564B38"
            mainContainer.style.backgroundImage = 'linear-gradient( #775C2C ,#3C2D14)';
            pokemonName.style.backgroundColor = "#938367";
            pokemonDetails.style.backgroundColor = "#938367"
            break;
        case 4:
            headerContainer.style.backgroundColor = "#452D2D"
            mainContainer.style.backgroundImage = 'linear-gradient( #763131 ,#330E0E)';
            pokemonName.style.backgroundColor = "#7A5959";
            pokemonDetails.style.backgroundColor = "#7A5959"
            break;
    }
}

function modifyActualPokemon (id) {
    document.getElementById('actual_symbol_img').src = pokemons[id].symbol;
    document.getElementById('pokemon_name').textContent = pokemons[id].name;

    document.getElementById('actual_pokemon_img').src = pokemons[id].img;
    
    for(let item in pokemons[id].info){     

        let valueDiv = document.createElement("div");
        valueDiv.className = "main__container__pokemon-info__details__item__value"

        let value = document.createElement("h3"); 
        value.innerHTML = pokemons[id].info[item]

        valueDiv.appendChild(value)  

        let infoItem = document.getElementById(item)  
        if( infoItem.childNodes.length === 3 ) {
            infoItem.appendChild(valueDiv)
        } else {
            infoItem.replaceChild(valueDiv, infoItem.childNodes[3])
        }
    }

    modifyColors(id)

}
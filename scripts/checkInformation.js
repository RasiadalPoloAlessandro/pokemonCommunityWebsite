function checkTeamName(nomeTeam){
    var xmlhttp = new XMLHttpRequest();
    let ris = false;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if(this.responseText === "true")
                ris = true;
        }
    };

    xmlhttp.open("GET", "../pages/methods.php?checkTeamName=" + nomeTeam, true);
    xmlhttp.send();
    return ris;
}
function checkPokemon(pokemons){
    let controllo = "";
    pokemons.forEach(function (pokemon){

        //Per ogni pokemon devo controllare tutte le informazioni

        if(pokemon.name === "" && !checkPokemonName(pokemon.name)) {
            controllo = "Controlla il nome di" + pokemon.name + "\n";
            return false;
        }
        if(!checkMove(pokemon)) {
            controllo += "Controlla le mosse di " + pokemon.name + "\n";
            return false;
        }
        if(!checkAbilityName(pokemon)) {
            controllo += "controlla l'abilità di " + pokemon.name + "\n";
            return false;
        }
    });
    return controllo;
}

function checkAbilityName(pokemon){
    var xmlhttp = new XMLHttpRequest();
    let ris = true;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if(this.responseText === "true" && pokemon.ability !== "")
                ris = false;
        }
    };

    xmlhttp.open("GET", "../pages/methods.php?checkAbility=" + pokemon.ability, true);
    xmlhttp.send();
    return ris;
}

function checkMove(pokemon) {
    let esito = true;
    for (let moveName in pokemon.moves) {
        let move = pokemon.moves[moveName];
        if (move === "" && !checkMoveName(move)) {
            esito = false;
            break;
        }
        return esito;
    }
}
function checkMoveName(move) {
    var xmlhttp = new XMLHttpRequest();
    let ris = false;
    xmlhttp.onreadystatechange = function () {
        if( this.responseText === "true")
            ris = true;
    };
    xmlhttp.open("GET", "../pages/methods.php?checkMove=" + move, true);
    xmlhttp.send();
}

function checkPokemonName(pokemonName){
    var xmlhttp = new XMLHttpRequest();
    let ris = false;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if( this.responseText === "true")
                ris = true;
        }
    };
    xmlhttp.open("GET", "../pages/methods.php?checkPokemon=" + pokemonName, true);
    xmlhttp.send();
    return ris;
}

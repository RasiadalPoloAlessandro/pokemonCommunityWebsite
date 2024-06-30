var tableCreated = false;
var pokemons = [];
var clickedButton = 0;
var currentTableType = "";
var lastInput;

function showPokemon(pokemonName) {
    if (pokemonName === "") {
        document.getElementById("pokemonNameTxt").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                let risposte = JSON.parse(this.responseText);
                let tableType = "pokemon"; // Imposta il tipo di tabella a "pokemon"
                createOrUpdateTable(tableType, risposte);
            }
        };
        xmlhttp.open("GET", "../../pages/methods.php?nomePokemon=" + pokemonName, true);
        xmlhttp.send();
    }
}

function showItem(itemName) {
    if (itemName === "") {
        document.getElementById("").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                let risposte = JSON.parse(this.responseText);
                let tableType = "item"; // Imposta il tipo di tabella a "item"
                createOrUpdateTable(tableType, risposte);
            }
        };
        xmlhttp.open("GET", "../../pages/methods.php?nomeItem=" + itemName, true);
        xmlhttp.send();
    }
}
function showMoves(inputId, moveName) {
    lastInputId = inputId;
    if (moveName === "") {
        document.getElementById("").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                let risposte = JSON.parse(this.responseText);
                let tableType = "move"; // Imposta il tipo di tabella a "item"
                createOrUpdateTable(tableType, risposte);
            }
        };
        xmlhttp.open("GET", "../../pages/methods.php?moveName=" + moveName + "&pokemonName=" + document.getElementById("nomePokemonTxt").value , true);
        xmlhttp.send();
    }
}

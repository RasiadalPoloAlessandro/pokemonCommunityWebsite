function createOrUpdateTable(tableType, data) {

    if (!tableCreated || currentTableType !== tableType) {

        removeTableIfExists();
        if (tableType === "pokemon")
            createPokemonTable(data);
        else if (tableType === "item")
            createItemTable(data);
        else if (tableType === "move")
            createMoveTable(data);

        currentTableType = tableType;
        tableCreated = true;
    }
    // Se la tabella è già stata creata e ha lo stesso tipo, aggiorna semplicemente i dati
    if (tableType === "pokemon")
        updateTable(data);
    else if (tableType === "item")
        updateItems(data);
    else if (tableType === "move")
        updateMoves(data);
}

function removeTableIfExists() {
    let existingTable = document.getElementById("tableHint");
    if (existingTable) {
        existingTable.parentNode.removeChild(existingTable);
    }
}

function createDefaultTable() {

    let table = document.createElement("table");
    table.style.border = "1px solid white";
    table.style.width = "40%";
    table.style.height = "100%";
    table.id = "tableHint";

    return table;
}

function createPokemonTable(data) {
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    let table = createDefaultTable();
    // Creazione dell'intestazione della tabella
    let headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = "<th>Sprite</th>" +
        "<th>Nome</th>" +
        "<th>Abilità</th>" +
        "<th>TipoPrimario</th>" +
        "<th>TipoSecondario</th>" +
        "<th>PS</th>" +
        "<th>Atk</th>" +
        "<th>Def</th>" +
        "<th>SAtk</th>" +
        "<th>SDef</th>" +
        "<th>Spe</th>";
    headerRow.style.color = "white";

    // Creazione del corpo della tabella
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    div.appendChild(table);
    document.getElementById("bodyPage").appendChild(div);
    document.getElementById("tableHint").addEventListener("click", clickPokemon);
}

function createItemTable(data) {
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    let table = createDefaultTable();
    // Creazione dell'intestazione della tabella
    let headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = "<th>Nome</th>" +
        "<th>Effetto</th>" +
        "<th>PP</th>" +
        "<th>Tipo</th>" +
        "<th>Potenza</th>" +
        "<th>Precisione</th>" +
        "<th>Priorità</th>" +
        "<th>Categoria</th>";
    headerRow.style.color = "white";

    // Creazione del corpo della tabella
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    div.appendChild(table);
    document.getElementById("bodyPage").appendChild(div);
    document.getElementById("tableHint").addEventListener("click", clickItem);
}

function createMoveTable(data) {
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    let table = createDefaultTable();
    // Creazione dell'intestazione della tabella
    let headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = headerRow.innerHTML = "<th>Nome</th>" +
        "<th>Effetto</th>" +
        "<th>PP</th>" +
        "<th>Tipo</th>" +
        "<th>Potenza</th>" +
        "<th>Precisione</th>" +
        "<th>Priorità</th>" +
        "<th>Categoria</th>";
    headerRow.style.color = "white";

    // Creazione del corpo della tabella
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    div.appendChild(table);
    document.getElementById("bodyPage").appendChild(div);
    document.getElementById("tableHint").addEventListener("click", clickMove);
}


function clickMove(event) {
    let row = event.target.closest("tr");
    if (row && row.rowIndex !== 0) {
        let cells = row.getElementsByTagName("td");
        let lastInput = document.getElementById(lastInputId);
        if (lastInput) {
            lastInput.value = cells[0].textContent;
            // Aggiorna l'oggetto newPokemon con la mossa corrispondente
            switch (lastInput.id) {
                case "move1":
                    pokemons[clickedButton].moves.move1 = lastInput.value;
                    break;
                case "move2":
                    pokemons[clickedButton].moves.move2 = lastInput.value;
                    break;
                case "move3":
                    pokemons[clickedButton].moves.move3 = lastInput.value;
                    break;
                case "move4":
                    pokemons[clickedButton].moves.move4 = lastInput.value;
                    break;
            }
        }
    }
}

function clickItem(event) {
    let row = event.target.closest("tr");
    if (row && row.rowIndex !== 0) {
        let cells = row.getElementsByTagName("td");
        document.getElementById("itemName").value = cells[0].textContent;
        pokemons[clickedButton].item = cells[0].textContent;
    }
}

function updateTable(data) {
    let tableBody = document.getElementById("tableHint").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Pulisci il corpo della tabella
    // Aggiungi i nuovi dati alla tabella
    iconrow = "https://play.pokemonshowdown.com/sprites/dex/";
    data.forEach(function (pokemon) {
        let row = tableBody.insertRow();
        newurl = iconrow + pokemon.pokemonName.toLowerCase() + ".png";
        row.innerHTML = "<td>" +
            "<img src=\"" + newurl + "\" class = 'imgTable'>\n</td>" +
            "<td>" + pokemon.pokemonName + "</td>" +
            "<td>" + pokemon.ability + "</td>" +
            "<td>" + pokemon.primaryType + "</td>" +
            "<td>" + pokemon.secondaryType + "</td>" +
            "<td>" + pokemon.PS + "</td>" +
            "<td>" + pokemon.atk + "</td>" +
            "<td>" + pokemon.def + "</td>" +
            "<td>" + pokemon.SAtk + "</td>" +
            "<td>" + pokemon.SDef + "</td>" +
            "<td>" + pokemon.spe + "</td>";
    });

}

function salvaTeam() {
    var nomeTeam = document.getElementById("teamNameTxt").value;
    if(nomeTeam === "" || checkTeamName(nomeTeam))
        alert("Controlla il nome del Team!");

    let check = checkPokemon(pokemons);
    if (check !== "")
        alert(check);
    else {
        var xhr = new XMLHttpRequest();

        var url = "../pages/methods.php?nomeTeam=" + document.getElementById("teamNameTxt").value;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if(this.responseText === "true")
                    window.location.reload();
                else
                    alert("Qualcosa è andato storto, riprova");
            }
        };

        var jsonData = JSON.stringify(pokemons);
        xhr.send(jsonData);
    }
}

function updateTeamCount(count) {
    if (count === 6) {
        document.getElementById("buttonAddPokemon").style.display = "none";
        let newButton = document.createElement("button");
        newButton.className = "buttonList";
        newButton.addEventListener("click", function () {
            salvaTeam();
        });
        document.getElementById("pokemonList").appendChild(newButton);
    }
}

function updateMoves(data) {
    let tableBody = document.getElementById("tableHint").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Pulisci il corpo della tabella
    data.forEach(function (move) {
        let row = tableBody.insertRow();
        row.innerHTML = "<td>" + move.Nome + "</td>" +
            "<td>" + move.Effetto + "</td>" +
            "<td>" + parseInt(move.PP) + "</td>" +
            "<td>" + move.Tipo + "</td>" +
            "<td>" + move.power + "</td>" +
            "<td>" + move.accuracy + "</td>" +
            "<td>" + move.priority + "</td>" +
            "<td>" + move.category + "</td>";

        row.addEventListener("click", function (event) {
            clickMove(event); // Chiamata alla funzione clickMove
        });
    });

}

function updateItems(data) {
    let tableBody = document.getElementById("tableHint").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    data.forEach(function (item) {
        let row = tableBody.insertRow();
        row.innerHTML = "<td>" + item.Nome + "</td>" +
            "<td>" + item.Effetto + "</td>";
    });

}


function updatePokemonDetails(pokemon) {
    document.getElementById("hpDiv").style.width = pokemon.ps + "px";
    document.getElementById("atkDiv").style.width = pokemon.atk + "px";
    document.getElementById("defDiv").style.width = pokemon.def + "px";
    document.getElementById("spaDiv").style.width = pokemon.SAtk + "px";
    document.getElementById("spdDiv").style.width = pokemon.SDef + "px";
    document.getElementById("speDiv").style.width = pokemon.spe + "px";
    document.getElementById("imageId").src = pokemon.image;
    document.getElementById("nomePokemonTxt").value = pokemon.name;
    document.getElementById("abilityName").value = pokemon.ability;
    document.getElementById("itemName").value = pokemon.item;
    document.getElementById("move1").value = pokemon.moves.move1;
    document.getElementById("move2").value = pokemon.moves.move2;
    document.getElementById("move3").value = pokemon.moves.move3;
    document.getElementById("move4").value = pokemon.moves.move4;
    document.getElementById("primaryType").src = pokemon.primaryType;

    if (pokemon.secondaryType !== "null")
        document.getElementById("secondaryType").src = pokemon.secondaryType;
}

function clickPokemon(event) {

    let newPokemon = {};
    let row = event.target.closest("tr");
    if (row && row.rowIndex !== 0) { // Controlla se la riga è valida e non è l'intestazione
        let cells = row.getElementsByTagName("td");
        newPokemon.ps = parseInt(cells[5].textContent);
        newPokemon.atk = parseInt(cells[6].textContent);
        newPokemon.def = parseInt(cells[7].textContent);
        newPokemon.SAtk = parseInt(cells[8].textContent);
        newPokemon.SDef = parseInt(cells[9].textContent);
        newPokemon.spe = parseInt(cells[10].textContent);
        newPokemon.name = cells[1].textContent.toLowerCase();
        newPokemon.image = "https://www.smogon.com/dex/media/sprites/xy/" + newPokemon.name + ".gif";
        newPokemon.ability = cells[2].textContent;
        newPokemon.moves = {move1: "", move2: "", move3: "", move4: ""};
        newPokemon.primaryType = "https://play.pokemonshowdown.com/sprites/types/" + cells[3].textContent + ".png";
        newPokemon.secondaryType = "https://play.pokemonshowdown.com/sprites/types/" + cells[4].textContent + ".png";

        updatePokemonDetails(newPokemon);
        pokemons[clickedButton] = newPokemon;
        document.getElementById("pokemonList").querySelectorAll("button")[clickedButton].textContent = newPokemon.name;
    }
}

function changeToSelectedInterface(){
    document.getElementById("bodyPage").innerHTML = "<div id = \"teamName\">\n" +
        "        <label for=\"teamNameTxt\" id = \"labelTeamName\">Nome del team</label>\n" +
        "        <input type=\"text\" name=\"\" id=\"teamNameTxt\">\n" +
        "    </div>\n" +
        "\n" +
        "<div id = \"pokemonList\" style=\"display: flex\">\n" +
        "    <button class = \"buttonList\" id = \"buttonAddPokemon\"><i class=\"fas fa-plus-circle\"></i></button>\n" +
        "</div>\n" +
        "<div class = \"divChart\">\n" +
        "    <div class = \"imgPokemonDiv\">\n" +
        "        \n" +
        "        <div class = \"imgPokemon\">\n" +
        "            <img src=\"https://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif\" class = \"pokemonImg\" alt=\"\" id = \"imageId\">\n" +
        "        </div>\n" +
        "        <div class = \"pokemonName\" style=\"\">\n" +
        "            <input type=\"text\" id=\"nomePokemonTxt\" class =\"pokemonName\" onkeyup=\"showPokemon(this.value)\" value = \"bulbasaur\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class = \"abilities-items\">\n" +
        "        <div class = \"types\">\n" +
        "            <div ><img src=\"https://play.pokemonshowdown.com/sprites/types/Grass.png\" alt=\"\" class = \"typeImage\" id = \"primaryType\"></div>\n" +
        "            <div><img src=\"https://play.pokemonshowdown.com/sprites/types/Poison.png\" alt=\"\" class = \"typeImage\" id = \"secondaryType\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"abilityDiv\">\n" +
        "            <label for=\"\">Ability</label>\n" +
        "            <input type=\"text\" name=\"\" id=\"abilityName\" value = \"Overgrow\" class = \"abiliyInput\">\n" +
        "\n" +
        "        </div>\n" +
        "        <div class = \"itemDiv\">\n" +
        "            <label for=\"\">Item</label>\n" +
        "            <input type=\"text\" name=\"\" id=\"itemName\" class = \"itemInput\" onkeyup=\"showItem(this.value)\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class = \"moveSet\">\n" +
        "        <div class = \"move\">\n" +
        "            <input type=\"text\" name=\"\" id=\"move1\" onkeyup=\"showMoves(this.id, this.value)\">\n" +
        "        </div>\n" +
        "        <div class = \"move\">\n" +
        "            <input type=\"text\" name=\"\" id=\"move2\" onkeyup=\"showMoves(this.id,this.value)\">\n" +
        "        </div>\n" +
        "        <div class=\"move\">\n" +
        "            <input type=\"text\" name=\"\" id=\"move3\" onkeyup=\"showMoves(this.id,this.value)\">\n" +
        "        </div>\n" +
        "        <div class=\"move\">\n" +
        "            <input type=\"text\" name=\"\" id=\"move4\" onkeyup=\"showMoves(this.id, this.value)\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class = \"divStatistics\">\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">HP</label>\n" +
        "            <div class = \"stats\" id = \"hpDiv\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">ATK</label>\n" +
        "            <div class = \"stats\" id = \"atkDiv\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">SPE</label>\n" +
        "            <div class = \"stats\" id = \"speDiv\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">SPD</label>\n" +
        "            <div class = \"stats\" id = \"spdDiv\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">DEF</label>\n" +
        "            <div class = \"stats\" id = \"defDiv\"></div>\n" +
        "        </div>\n" +
        "        <div class = \"statsContainer\">\n" +
        "            <label class = \"statsName\" for=\"\">SATK</label>\n" +
        "            <div class = \"stats\" id = \"spaDiv\"></div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>";

    document.getElementById("buttonAddPokemon").addEventListener("click", function () {
        // Aggiungi un nuovo Pokémon all'array
        let newPokemon = {
            name: document.getElementById("nomePokemonTxt").value,
            ability: document.getElementById("abilityName").value,
            image: document.getElementById("imageId").src,
            ps: parseInt(document.getElementById("hpDiv").style.width),
            atk: parseInt(document.getElementById("atkDiv").style.width),
            def: parseInt(document.getElementById("defDiv").style.width),
            SAtk: parseInt(document.getElementById("spaDiv").style.width),
            SDef: parseInt(document.getElementById("spdDiv").style.width),
            spe: parseInt(document.getElementById("speDiv").style.width),
            primaryType: document.getElementById("primaryType").src,
            secondaryType: document.getElementById("secondaryType").src,
            moves:
                {
                    move1: document.getElementById("move1").value,
                    move2: document.getElementById("move2").value,
                    move3: document.getElementById("move3").value,
                    move4: document.getElementById("move4").value
                },

            item: document.getElementById("itemName").value

        };
        pokemons.push(newPokemon);

        // Crea un nuovo pulsante per il nuovo Pokémon
        let newButton = document.createElement("button");
        newButton.className = "buttonList";
        newButton.textContent = newPokemon.name;

        newButton.dataset.index = pokemons.length - 1;


        newButton.addEventListener("click", function () {
            let pokemonIndex = parseInt(this.dataset.index);
            let pokemon = pokemons[pokemonIndex];
            updatePokemonDetails(pokemon);
            console.log("Pokemon cliccato:", pokemonIndex);
            clickedButton = pokemonIndex;
        });

        let addButton = document.getElementById("buttonAddPokemon");
        addButton.parentNode.insertBefore(newButton, addButton);
        updateTeamCount(pokemons.length);
    });
}
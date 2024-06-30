<?php

use classes\DB;

require "../classes/DB.php";

$queryPokemonName = isset($_GET["nomePokemon"]) ? $_GET["nomePokemon"] : "";
$queryItemName = isset($_GET["nomeItem"]) ? $_GET["nomeItem"] : "";
$queryMoveName = isset($_GET["moveName"]) ? $_GET["moveName"] : "";
if ($queryPokemonName) {
    $risultato = (new classes\DB)->getpokemonHint($queryPokemonName);
    echo $risultato;
    exit();
}
if($queryItemName){
    $risultato = (new classes\DB)->getItemHint($queryItemName);
    echo $risultato;
    exit();
}

if($queryMoveName){
    $pokemonName = isset($_GET["pokemonName"]) ? $_GET["pokemonName"] : "";
    $risultato = (new classes\DB)->getMovesHint($queryMoveName, $pokemonName);
    echo $risultato;
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Da Javascript mi arrivano dei dati in formato JSON
    $pokemons = json_decode(file_get_contents("php://input"), true);
    $nomeTeam = isset($_GET['nomeTeam']) ? $_GET['nomeTeam'] : '';
        if(DB::saveTeam($nomeTeam, $pokemons))
            echo "true";
        else {
            // Se la richiesta non è di tipo POST, restituisci un messaggio di errore
            echo "false";
    }
}

$checkPokemon = isset($_GET['checkPokemon']) ? $_GET['checkPokemon'] : "";
if($checkPokemon)
    echo DB::checkPokemonName($checkPokemon);
$checkMove = isset($_GET['checkMove']) ? $_GET['checkMove'] : "";
if($checkMove)
    echo DB::checkMove($checkMove, $checkPokemon);
$checkAbility = isset($_GET['checkAbility']) ? $_GET['checkAbility'] : "";
if($checkAbility)
    echo DB::checkAbility($checkAbility, $queryPokemonName);
$checkTeamName = isset($_GET['checkTeamName']) ? $_GET['checkTeamName'] : "";
if($checkTeamName)
    echo DB::checkTeamName($checkTeamName);

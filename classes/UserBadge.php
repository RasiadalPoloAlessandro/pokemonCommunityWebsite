<?php

namespace classes;

class UserBadge{

    private $userPhoto;
    private $username;
    private $teamName;
    private $pokemon1;
    private $pokemon2;
    private  $pokemon3;
    private $pokemon4;

    public function __construct($userPhoto, $username, $teamName, $pokemon1, $pokemon2, $pokemon3, $pokemon4)
    {
        $this->userPhoto = $userPhoto;
        $this->username = $username;
        $this->teamName = $teamName;
        $this->pokemon1 = $pokemon1;
        $this->pokemon2 = $pokemon2;
        $this->pokemon3 = $pokemon3;
        $this->pokemon4 = $pokemon4;
    }

    /**
     * @return mixed
     */
    public function getUserPhoto()
    {
        return $this->userPhoto;
    }

    /**
     * @param mixed $userPhoto
     */
    public function setUserPhoto($userPhoto)
    {
        $this->userPhoto = $userPhoto;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getTeamName()
    {
        return $this->teamName;
    }

    /**
     * @param mixed $teamName
     */
    public function setTeamName($teamName)
    {
        $this->teamName = $teamName;
    }

    /**
     * @return mixed
     */
    public function getPokemon1()
    {
        return $this->pokemon1;
    }

    /**
     * @param mixed $pokemon1
     */
    public function setPokemon1($pokemon1)
    {
        $this->pokemon1 = $pokemon1;
    }

    /**
     * @return mixed
     */
    public function getPokemon2()
    {
        return $this->pokemon2;
    }

    /**
     * @param mixed $pokemon2
     */
    public function setPokemon2($pokemon2)
    {
        $this->pokemon2 = $pokemon2;
    }

    /**
     * @return mixed
     */
    public function getPokemon3()
    {
        return $this->pokemon3;
    }

    /**
     * @param mixed $pokemon3
     */
    public function setPokemon3($pokemon3)
    {
        $this->pokemon3 = $pokemon3;
    }

    /**
     * @return mixed
     */
    public function getPokemon4()
    {
        return $this->pokemon4;
    }

    /**
     * @param mixed $pokemon4
     */
    public function setPokemon4($pokemon4)
    {
        $this->pokemon4 = $pokemon4;
    }

    public static function generateBadge($team)
    {
        $html = '<div class="userBadge">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/' . $team['Pokemon'][0]['Id'] . '.png" id="imgAnimation1-1" class="pokemonAnimation" alt="">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/' . $team['Pokemon'][5]['Id'] . '.png" id="imgAnimation2-1" class="pokemonAnimation" alt="">
        <h2>' . $team['autore'].'s Card</h2>
        <img src="images/icon.png" alt="" class="imgBadge">
        <h3>'.$team['NomeSquadra'].'</h3>
        <div class="teamDiv">';

        foreach ($team['Pokemon'] as $pokemon) {
            $html .= '<div class="pokemonDescription">
            <img src="https://www.smogon.com/dex/media/sprites/xy/' . $pokemon['NomePokemon'] . ".gif". '" alt="" class="imgBadge">
            <div>
                <p>' . $pokemon['Mossa1'] . '</p>
                <p>' . $pokemon['Mossa2'] . '</p>
                <p>' . $pokemon['Mossa3'] . '</p>
                <p>' . $pokemon['Mossa4'] . '</p>
            </div>
        </div>';
        }

        $html .= '</div></div>';

        return $html;
    }

    public static function generateTeam($team)
    {
        // Inizializza l'HTML per il team
        $html = '<div class="teamDiv">
        <h3 class="teamTitle">' . $team["NomeSquadra"] . '</h3>
        <div class="members">';

        // Itera attraverso i Pokémon nel team
        foreach ($team["Pokemon"] as $pokemon) {
            // Aggiungi il tag HTML per l'immagine del Pokémon
            $html .= '<div class="pokemonContainer">
            <img src="../images/escaBallSprite.png" alt="" class="pokeball">
            <img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/' . $pokemon["NomePokemon"] . '.png" class="pokemon">
        </div>';
        }

        // Chiudi il div per i membri del team e aggiungi il pulsante Modifica
        $html .= '</div>
        <button class="teamButton">Modifica</button>
    </div>';

        return $html;
    }

}

?>

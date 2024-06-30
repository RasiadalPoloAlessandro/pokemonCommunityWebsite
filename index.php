<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./styles/homePage.css">
    <link rel="stylesheet" href="./styles/header.css">
    <script src = "./scripts/DataSaverHandler.js"></script>

</head>
<body>


<header>
        <nav>
            <h1>La sala d'onore della Community</h1>

            <?php

            if(isset($_COOKIE['username'])){

                echo '<a href="index.php" class = "headerLink"><button class = "headerButton">Home</button></a>';
                $username = $_COOKIE['username'];
                echo '<a href="./pages/profile.php" class = "headerLink"><button class = "headerButton">'.$username.'</button></a>';
                echo '<a href = "./pages/teamMaker.php"><button class = "headerButton" >TeamMaker</button></a>';
                echo '<a href="" class = "headerLink"><button class = "headerButton" onclick="deleteCookie(\'username\')" style = "border: none; float: right; margin-right: 50px">Exit</button></a>';
            }
            else{
                echo '<a href="index.php" class = "headerLink"><button class = "headerButton">Home</button></a>';
                echo '<a href="./pages/login.php" class = "headerLink"><button class = "headerButton">Login</button></a>';
            }

            ?>

        </nav>

</header>

<section id = "bodyPage">

    <?php
    include "classes/DB.php";
    include "classes/UserBadge.php";

        $teams = json_decode(\classes\DB::getUserTeams("all"), true);
        foreach($teams as $team)
            echo \classes\UserBadge::generateBadge($team);
    ?>

    <?php

    //Faccio una chiamata al database per ottenere tutti i badge creati dai vari utenti




    ?>

</section>

<footer>

</footer>

</body>
</html>
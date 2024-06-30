<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../styles/teamMaker/teamMaker.css">
    <link rel="stylesheet" href="../styles/header.css">
    <!-- Link per Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../styles/teamMaker/selectedTeamStyle.css">
    <!-- Link per Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <script src="../scripts/DataSaverHandler.js"></script>
    <script src="../scripts/InformationHandler.js"></script>
    <script src = ../scripts/checkInformation.js></script>
    <script src = "../scripts/selectedTeamInterface.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src = "../scripts/ajax-functions.js"></script>
    <title>TeamMaker</title>
</head>
<body>
<header>
    <nav>
        <h1>La sala d onore della Community</h1>

        <?php
        include '../classes/DB.php';
        include "../classes/UserBadge.php";

        if (isset($_COOKIE['username'])) {

            echo '<a href="../index.php" class = "headerLink"><button class = "headerButton">Home</button></a>';
            $username = $_COOKIE['username'];
            echo '<a href="./profile.php" class = "headerLink"><button class = "headerButton">' . $username . '</button></a>';
            echo '<a href="" class = "headerLink"><button class = "headerButton" onclick="deleteCookie(\'username\')" style = "border: none; float: right; margin-right: 50px">Exit</button></a>';
        } else {
            header("Location: ./login.php");
        }

        ?>

    </nav>
</header>

<section id="bodyPage">
    <?php
    $username = $_COOKIE['username'];
    //Mi servono tutti i team fatti dall'utente che sta usando il sito
    $teams = json_decode(\classes\DB::getUserTeams($username), true);
    foreach($teams as $team) {
        echo classes\UserBadge::generateTeam($team);
    }
    ?>
    <button id = "newTeamButton" onclick="changeToSelectedInterface()"><i class = "fas fa-plus-circle"></i>New Team</button>

</section>

</body>
</html>
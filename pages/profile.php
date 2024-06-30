<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../styles/header.css">
    <title>Document</title>
</head>
<body>

<header>
    <div class = "navId">
        <nav>
            <h1>La sala d'onore della Community</h1>

            <?php

            if(isset($_COOKIE['username'])){

                echo '<a href="../index.php" class = "headerLink"><button class = "headerButton">Home</button></a>';
                $username = $_COOKIE['username'];
                echo '<a href = "./teamMaker.php"><button class = "headerButton" >TeamMaker</button></a>';
                echo '<a href="" class = "headerLink"><button class = "headerButton" onclick="deleteCookie(\'username\')" style = "border: none; float: right; margin-right: 50px">Exit</button></a>';
            }
            else{
               header("Location: ./login.php");
            }

            ?>
        </nav>
    </div>

</header>

<section>

</section>

<footer>

</footer>

</body>
</html>
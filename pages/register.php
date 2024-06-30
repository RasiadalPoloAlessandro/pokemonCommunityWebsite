<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/registerPage.css">
    <?php use classes\DB;
    require'../classes/DB.php'?>
</head>
<body>
<section id="body-login">
    <h1 class="text">Benvenuto Allenatore sul pokedex nazionale</h1>
    <h2 class="text">Effettua il login inserendo email e password</h2>
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" id="login-form">
        <label for="" class="label-form">Nome Utente</label>
        <input type="text" name="username" id="input-Name" class="formInput" required placeholder="PincoPallino"><br>
        <label for="email" class="label-form">Email</label>
        <input type="email" name="email" id="input-email" class = "formInput" required placeholder="Email">
        <label for="" class="label-form">Password</label>
        <input type="password" name="password" id="input-Password" class="formInput" required placeholder="Password"><br>
        <input type="submit" value="REGISTRATI" name="register" class="formInput" id = "buttonLogin">
    </form>
    <p id="register-link">Hai già un account?<a href="login.php">   Login</a></p>
</section>

<video id="background-video" autoplay muted loop>
    <source src="../videos/loginBackground.mp4" type="video/mp4">
</video>



<?php

if(isset($_POST['register'])){
    /*$username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $newUser = array("username" => $username, "password" => $password, "email" => $email);

    $users = json_decode(file_get_contents("../json/utenti.json"), true);

    foreach($users as $user){
        if($user['username'] == $username && $user['password'] == $password)
        {
            //Esiste già un utente con le stesse credenziali

        }
    }

    $users[] = $newUser;

    file_put_contents("../json/utenti.json", json_encode($users, JSON_PRETTY_PRINT));
    */
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $newUser = array("username" => $username, "password" => $password, "email" => $email);

    if($result = DB::createNewUser($newUser))
        header("Location: login.php");
    else
        echo $result;

}

?>
</body>
</html>
<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <div class="container">
        div.box <form-box>
            <?php
            include ("php/config.php");
            if(isset($_POST['submit'])){
                $email = mysqli_real_escape_string($conn,$_POST['email']);
                $password = mysqli_real_escape_string($conn,$_POST['password']);

                $result = mysqli_query($conn,"SELECT * FROM users WHERE Email='$email' AND Password='$password'") or die ("Select Error");
                $row = mysqli_fetch_assoc($result);

                if(is_array($row) && !empty($row)){
                    $_SESSION['valid'] = $row['Email'];
                    $_SESSION['username'] = $row['Username'];
                    $_SESSION['age'] = $row['Age'];
                    $_SESSION['id'] = $row('Id');
                }else{
                    echo " <div class='message'>
                    <p>Wrong Username or Password </p>
                    </div> <br> ";
                    echo " <a href='index.php'><button class='btn'>Go Back</button>";
                }
                if(isset($_SESSION['valid'])){
                    header("Locatin: home.php");
                }
            }else{

            
            }?>
        </form-box>
    </div>
</body>
</html>
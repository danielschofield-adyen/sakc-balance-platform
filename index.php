<?php session_start();
$liableBA = $_ENV["LIABLE_BA"];
$liableAH = $_ENV["LIABLE_AH"];
$platformLE = $_ENV["PLATFORM_LE"];
$subMerchantBA = $_ENV["SUBMERCHANT_BA"];
$subMerchantAH = $_ENV["SUBMERCHANT_AH"];
$subMerchantLE = $_ENV["SUBMERCHANT_LE"];
?>

<script type="text/javascript">
    var liableBA = "<?php echo $liableBA; ?>";
    var liableAH = "<?php echo $liableAH; ?>";
    var platformLE = "<?php echo $platformLE; ?>";
    var subMerchantBA = "<?php echo $subMerchantBA; ?>";
    var subMerchantAH = "<?php echo $subMerchantAH; ?>";
    var subMerchantLE = "<?php echo $subMerchantLE; ?>";
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FoodPanda - Login</title>
    <link rel="icon" href="login/images/canva.svg">

    <!-- Font Icon -->
    <link rel="stylesheet" href="login/fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="login/css/style.css">
    <link rel="stylesheet" href="style/style.css">

    <!-- Javascript to handle login -->
    <script src="frontend/login.js"></script>
    <script src="frontend/utils.js"></script>
</head>
<body style="margin:0px">

    <div id="grey-out" hidden="true">

    </div>


    <div class="main">
        <div class="container">
            <div id="foodpanda-loading-screen">
                <img id="loading-image" hidden="true" src="login/images/foodpanda_loading.gif" width="250" />
                <p id="message" hidden="true" ></p>
            </div>
        </div>
        <!-- Sign in  Form -->
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="login/images/canva.svg" alt="sing up image"></figure>
                        <a href="register.html" class="signup-image-link" >Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Login</h2>
                        <form method="POST" class="register-form" id="login-form" action="javascript:attemptLogin();">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="Username"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div>
                                <p id="errorMessage" hidden="true" ></p>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <script src="login/vendor/jquery/jquery.min.js"></script>
    <script src="login/js/main.js"></script>
</body>
</html>
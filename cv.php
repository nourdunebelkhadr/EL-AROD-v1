<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Assing Variables
    $user = filter_var($_GET['username'], FILTER_SANITIZE_STRING, 513);
    $mail = filter_var($_GET['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_GET['cellphone'], FILTER_SANITIZE_NUMBER_INT);
    $message = filter_var($_GET['message'], FILTER_SANITIZE_STRING, 513);


    // if(strlen($user)<3){
    //     $userError  =' username must contain more than 3 letters';
    //     $userError ='';
    // }
    //     $mailError ='';
    //  if(strlen($user)<14){
    //     $mailError  =' username must contain more than 14 letters';
    //     }
    //     $phoneError ='';
    //  if(strlen($user)<10){
    //     $phoneError  =' username must contain more than 10letters';
    //     }

    //Creating Array of Errors
    $formErrors = array();
    if (strlen($user) < 3) {
        $formErrors[] = ' username must contain more than <strong> 3</strong> letters';
    }
    if (strlen($mail) < 5) {
        $formErrors[] = ' email must contain more than <strong>5</strong> letters';
    }
    if (strlen($phone) < 10) {
        $formErrors[] = 'cellphone must contain more than <strong>10</strong> number';
    }

    $headers = 'From:' . $mail . '\r\n';
    if (empty($formErrors)) { //في حالة عدم وجود خطأ سيتم تنفيد الأوامر التاليىة 
        mail('nourdunebelkhadra80@gmail.com', 'Contact Form', $message, $headers);

        $user = '';
        $mail = '';
        $phone = '';
        $message = '';

        $success = '<div class="alert alert-success">We Have Recieved You Messege</div>';
    }
}

// <!-- action="/<?php echo $-SERVER['PHP_SELF'] " في نفس الصفحة -->
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/cvphp.css">
    <link rel="stylesheet" href="css/section.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/contactphp.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>Document</title>
</head>

<body >
    <header id="head">
        <h1 id="h1">NOUREDDINE BENELKHADRA-CV</h1>
    </header>
    <div id="nav">
        <nav>
            <ul>
                <li><a href="">ACCUEIL</a></li>
                <li><a href="#formation">FORMATIONS</a></li>
                <li><a href="#xperérience">EXPÉRIENCE PROFESSIONNELLES</a></li>
                <li><a href="#loisir">LOISERS</a></li>
                <li><a href="#contacte">CONTACTEZ-MOI</a></li>
            </ul>
        </nav>
    </div>

    <div id="div3_1">
        <img id="img1" src="image/aside1.png" alt="" srcset="">
    </div>

    <div id="div3_2">
        <h2> NOUREDDINE BENELKHADRA - 21 ANS</h1>
            <p>
                Développeur en freelance depuis cinq ans, je souhaite désormais
                mettre mes compétences et mon expérience au service d'AMCF.
                Ayant conçu plusieurs dizaines d'applications de différents genres (jeux mobiles, news, quiz, outils...), je peux appliquer à l'équipe de développement d'AMCF mes connaissances techniques (HTML5, Java/J2EE, C#), en UI et en analyse. À quoi s'ajoutent mes
                excellentes capacités d'adaptation et de communication.
            </p>
    </div>
    <div id="div3_3">
        <img src="image/instagrame.png" alt="" srcset=""> <img src="image/youtube.png" alt="" srcset=""> <img src="image/tweter.png" alt="" srcset="">
    </div>

    <section id="formation" >
        <h3>FORMATIONS</h3>
        <div class="container_section">
            <div id="details">
                <ul class="first_date_details">
                    <li>
                        2021
                    </li>
                    <ul>
                        <li>certification professionnelles d'oracle, programmeur java E </li>
                    </ul>
                </ul>
                <ul class="first_date_details">
                    <li>2021</li>
                    <ul>
                        <li>Doctorat en genie informatique et mathematique Applique</li>
                    </ul>
                </ul>
                <ul class="first_date_details">
                    <li>2020</li>
                    <ul>
                        <li>Doctorat en genie informatique et mathematique Applique</li>
                        <ul>
                            <li>specialite intelegence artificiel</li>
                        </ul>
                    </ul>
                </ul>
                <ul class="first_date_details">
                    <li>2017</li>
                    <ul>
                        <li>Doctorat en genie informatique et mathematique Applique</li>
                        <ul>
                            <li>specialite intelegence artificiel</li>
                        </ul>
                    </ul>
                </ul>
                <ul class="first_date_details">
                    <li>2012</li>
                    <ul>
                        <li>Doctorat en genie informatique et mathematique Applique</li>
                        <ul>
                            <li>specialite intelegence artificiel</li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div id="formation_img">
                <img src="image/unnamed (8).png" class="img  imgPhone" alt="" srcset="">
            </div>
        </div>
    </section>
    <section id="xperérience">

        <h3>
            EXPÉRIENCE PROFESSIONNELLES
        </h3>

        <div class="main">
            <div class="xperérience">
                <h3>
                    DEPUIS 2018
                </h3>
                <p>
                    DÉVELOPPEUR FREELANCE APPLICATIONS MOBILES
                </p>
            </div>
            <div class="xperérience">
                <h3>
                    2020 - 2021
                </h3>
                <p>
                    CONCEPTION ET MODÉLISZZTIONN DES SITES WEB
                </p>
            </div>
            <div class="xperérience">
                <h3>
                    2017 - 2019
                </h3>
                <p>
                    DÉVELOPPEUR WEB JUNIOR
                </p>
            </div>
        </div>
        <img src="image/unnamed (4).png" class="img1" alt="">
    </section>
    <section id="loisir">

        <h3>
            loisir
        </h3>

        <div class="container_section">
            <div class="container_img"><img   src="image/carte.png" alt=""></div>
            <div class="container_img"><img  src="image/bicyclette.png" alt=""></div>
            <div class="container_img"><img  src="image/livre.png" alt=""></div>
            <div class="container_img"><img  src="image/camera.png" alt=""></div>
        </div>
        <img src="image/unnamed (6).png" class="img1" alt="">
    </section>
    <section id="contacte">
        <h3>
            CONTACTEZ-MOI
        </h3>
        <div class="container">
            <h1 class="text-center">Contact Me</h1>


            <form class="contact-form" method="post">

                <?php if (!empty($formErrors)) { ?>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <?php
                        foreach ($formErrors as $error) {
                            echo $error . '<br>';
                        }
                        ?>
                    </div>
                <?php     } ?>
                <?php if (isset($success)) {
                    echo $success;
                } ?>
                <div class="form-group">
                    <input class="username form-control" type="text" name="username" placeholder="Type you usesname" value="<?php if (isset($user)) {
                                                                                                                                echo $user;
                                                                                                                            } ?>">
                    <i class="fa fa-user fa-fw"></i>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                        username must contain more than <strong> 3</strong> letters
                    </div>
                </div>
                <div class="form-group">
                    <input class="mail form-control" type="email" name="email" placeholder="Please Type a Valide Email " value="<?php if (isset($mail)) {
                                                                                                                                    echo $mail;
                                                                                                                                } ?>">
                    <i class="fa-solid fa-envelope fa-fw"></i>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                        email must contain more than <strong>5</strong> letters
                    </div>
                </div>
                <div class="form-group">
                    <input class="message form-control" type="text" name="cellphone" placeholder="Type  you cellphone" value="<?php if (isset($phone)) {
                                                                                                                                    echo $phone;
                                                                                                                                } ?>">
                    <i class="fa fa-phone fa-fw"></i>
                    <span class="asterisx">*</span>
                    <div class="alert alert-danger custom-alert">
                        cellphone must contain more than <strong>10</strong> number
                    </div>
                </div>
                <textarea class="form-control" name="message" placeholder="Your Massage ">
              <?php if (isset($message)) {
                    echo $message;
                } ?></textarea>

                <input class="btn btn-success btn-blok send-icons" type="submit" value="Send Messaage">
                <i class="fa-solid fa-paper-plane" style="color:white ;"></i>
            </form>
            <!-- <a href="https://stackoverflowteams.com/c/noureddine-benelkhadra">تواصل معنا </a> -->
        </div>
        <script src="js/jquery-3.6.3.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/custom.js"></script>
        <!-- <script src="js/all.min.js"></script> -->     
        </body>
        </html>
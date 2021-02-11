<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Admin</title>

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="../sidebar.css">
    <link rel="stylesheet" href="../styleCrud.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-database.js"></script>
</head>

<body>



    <div class="wrapper">
        <!-- Sidebar Holder -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Jama3at 9liaa</h3>
                <strong><img src="http://lqliaa.com/asset/imgs/logo.png" width="50" height="50"></strong>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i class="glyphicon glyphicon-home"></i>
                        Majliss Jamaai
                    </a>

                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Lijan</a></li>
                        <li><a href="../maktab">Maktab</a></li>
                        <li><a href="#">Dawarat Majliss</a></li>
                        <li><a href="../majliss">Majliss Jamaii</a></li>
                    </ul>
                </li>
                <li>

                    <a href="../news">
                        <i class="glyphicon glyphicon-home"></i>
                        News
                    </a>
                </li>
                <li>

                    <a href="../baramij">
                        <i class="glyphicon glyphicon-home"></i>
                        Baramij
                    </a>
                </li>
                <li>

                    <a href="../contactUs">
                        <i class="glyphicon glyphicon-home"></i>
                        Itassil Bina
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-link"></i>
                        Masali7 Jammaia
                    </a>
                </li>
                <li>
                    <a href="../raiss">
                        <i class="glyphicon glyphicon-link"></i>
                        Raiss
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-paperclip"></i>
                        Wata2i9 Idaria
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-send"></i>
                        Khadamat Iliktronia
                    </a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li><a href="http://www.lqliaa.com/" class="article">Back to Website</a></li>
            </ul>
        </nav>

        <!-- Page Content Holder -->
        <div id="content">

            <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                            <i class="glyphicon glyphicon-align-left"></i>
                            <!-- <span>Toggle Sidebar</span> -->
                        </button>
                    </div>
                </div>
            </nav>
                <?php include 'majlissCrud.php'; ?>

        </div>
    </div>





    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <!-- Bootstrap Js CDN -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="majliss.js"></script>

</body>

</html>
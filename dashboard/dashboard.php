<?php

// include "../backend/fileReader.php";
session_start() ;
$Login_Type=$_SESSION["type"];

// if($_GET["postal"]!=null){
// $_SESSION["postal"]=$_GET["postal"];
// }
?>

<html lang="en"><head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Canva - Dashboard</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.css" rel="stylesheet">
    <script src="../frontend/utils.js"></script>
    <script src="../frontend/paymentMethods.js"></script>
    <script src="../frontend/legalEntity.js"></script>
    <script src="../frontend/getOnboardingLink.js"></script>
    <script src="../frontend/createAccountHolder.js"></script>
    <script src="../frontend/createBalanceAccounts.js"></script>
    <script src="../frontend/getBalance.js"></script>
    <script src="../frontend/payments.js"></script>
    <script src="../frontend/handleServerResponse.js"></script>
    <script src="../frontend/handleShopperRedirect.js"></script>
    <script src="../frontend/handleSubmission.js"></script>
    <script src="../frontend/paymentsDetails.js"></script>
    <script src="../frontend/dropin.js"></script>
    <script src="../frontend/template.js"></script>
    <script src="../frontend/transferBalance.js"></script>
    <script src="../frontend/logout.js"></script>
    <script src="../frontend/dashboardWidgets.js"></script>
    <script>
    window.onload = async function() {
    if("<?php echo $Login_Type;?>"=='individual'){
      document.getElementById("contentShopperRow").removeAttribute("hidden");
    }

    else{  document.getElementById("contentAdminRow").removeAttribute("hidden");}


    callDashboardWidgets();
  };
    </script>

<style type="text/css">/* Chart.js */
@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}</style></head>

<body id="page-top">



    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
                <div class="sidebar-brand-icon">
                    <img class="sidebar-icon" src="../../login/images/canva.svg">
                </div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="/dashboard/dashboard.php">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link" href="/dashboard/index.php">
                    <i class="fas fa-fw fa-shopping-bag"></i>
                    <span>Cards</span>
                </a>
            </li>
            <hr class="sidebar-divider my-0">
            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link" href="/dashboard/capital.php">
                    <i class="fas fa-fw fa-money-bill"></i>
                    <span>Capital</span>
                </a>
            </li>
            <hr class="sidebar-divider my-0">
            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link" href="../qrCode.html">
                    <i class="fas fa-fw fa-sign-in-alt"></i>
                    <span>Sign Up</span>
                </a>
            </li>
            <hr class="sidebar-divider d-none d-md-block">
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">

                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">










                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php echo $_SESSION["firstName"] . " " . $_SESSION["lastName"] ?></span>
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">




                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-1">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

                    </div>
                    <div class="mb-2 text-gray-800">Here is a summary of your business</div>

<!---contentShopper-->
<!-- Content admin Row -->
<div class="row" id="contentShopperRow" hidden="true">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Wallet</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="getBalanceShopper" hidden="true">Dummy tex</div>

                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            KYC Details</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800" id="getStoredCardDetails">Update</div>
                    </div>
                    <div class="col-auto">

                    <button type="button" class="btn btn-outline-secondary" onclick="callGetOnboardingLink()">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
</svg>
<span class="visually-hidden"></span>

</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-8 mb-4">
        <div class="card shadow h-100 py-2">
            <div class="card-body">
                <h5 class="card-title text-dark font-weight-bold">Bank Account</h5>
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="h5 text-dark mb-1">Current balance</div>
                        <div class="h2 mb-0 mr-3 font-weight-bold text-gray-800">$700.00</div>
                        <div class="text-xs text-muted text-uppercase mb-1">Pending payout: $2,020.20</div>
                        <button type="button" class="btn btn-primary" onclick="window.location.href='/dashboard/index.php'">View Cards</button>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Create New Card</button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                          <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Create New Card</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          <div class="offcanvas-body">

                          </div>
                        </div>


                    </div>
                    <div class="col-auto">
                        <img class="sidebar-icon canva-card" src="img/canva_card.png">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Pending Requests Card Example -->
    <div class="col-xl-3 col-md-4 mb-4">
        <div class="card shadow h-100 py-2">
            <div class="card-body">
                <h5 class="card-title text-dark font-weight-bold">Captial</h5>
                <div class="h5 text-dark mb-1">You've been pre-qualified to receive funds up to $8,000.00 today</div>
                <button type="button" class="btn btn-primary" onclick="window.location.href='/dashboard/capital.php'">View Offers</button>
                <div class="row no-gutters align-items-center">

                    <div class="col mr-2">

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!---end of shopper -->

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Content Column -->



                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright © AfP Noobs - Daniel, Jason &amp; Khush</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="javascript:logout()">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>


    <!-- Page level plugins -->
    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/datatables-demo.js"></script>




</body></html>

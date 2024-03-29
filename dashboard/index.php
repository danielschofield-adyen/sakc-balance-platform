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

<html lang="en"><head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="icon" href="../login/images/canva.svg">

    <title>FoodPanda - Checkout</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
     <link href="css/shoppingCart.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
 <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.css" rel="stylesheet">
    <script src="../frontend/utils.js"></script>
    <script src="../frontend/paymentMethods.js"></script>
    <script src="../frontend/legalEntity.js"></script>
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
    <script>
    window.onload = async function() {
    callGetBalance();
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
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard/dashboard.php">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    <!-- Divider -->
                    <hr class="sidebar-divider my-0">
                    <!-- Nav Item - Pages Collapse Menu -->
                    <li class="nav-item active">
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

            <!-- Section-->
            <div class="container-fluid">
                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Shopping</h1>

                    </div>




       <section class="py-5">
           <div class="container px-4 px-lg-5 mt-5">
               <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/y9rp-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">Encik Tan (Bedok Mall)</h5>
                                   <!-- Product price-->
                                   $50.00
                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=y9rp&price=50&itemName=Encik Tan (Bedok Mall)">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Sale badge-->
                           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/s9wp-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                           <div class="text-center">
                                     <!-- Product name-->
                                     <h5 class="fw-bolder">Fortune Food (Gourmet East Kitchen)</h5>
                                     <!-- Product reviews-->
                                     <div class="d-flex justify-content-center small text-warning mb-2">
                                         <div class="bi-star-fill"></div>
                                         <div class="bi-star-fill"></div>
                                         <div class="bi-star-fill"></div>
                                         <div class="bi-star-fill"></div>
                                         <div class="bi-star-fill"></div>
                                     </div>
                                     <!-- Product price-->
                                     <span class="text-muted text-decoration-line-through">$45.00</span>
                                     $40.00
                                 </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=s9wp&price=40&itemName=Fortune Food (Gourmet East Kitchen)">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Sale badge-->
                           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/w5pf-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">A-One Signature (Tampines One)</h5>
                                   <span class="text-muted text-decoration-line-through">$20.00</span>
                                  $18.00

                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=w5pf&price=18&itemName=A-One Signature (Tampines One)">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/x8fe-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">O'Braim Express</h5>
                                   <!-- Product reviews-->
                                   <div class="d-flex justify-content-center small text-warning mb-2">
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                   </div>

                                  $38.00

                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=x8fe&price=38&Itemname=O'Braim Express">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Sale badge-->
                           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/n8kn-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">Thunder tea</h5>
                                   <span class="text-muted text-decoration-line-through">$20.00</span>
                                  $18.00

                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=n8kn&price=18&itemName=Thunder tea">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/w9xe-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">Yam Mee Teochew Fishball Noodles (Bedok)</h5>
                                   <!-- Product price-->
                                   $40.00
                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=w9xe&price=40&itemName=Yam Mee Teochew Fishball Noodles (Bedok)">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Sale badge-->
                           <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/y6wd-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">Bubble tea</h5>
                                   <!-- Product reviews-->
                                   <div class="d-flex justify-content-center small text-warning mb-2">
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                   </div>
                                   <!-- Product price-->
                                   <span class="text-muted text-decoration-line-through">$30.00</span>
                                  $28.00

                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=y6wd&price=28&itemName=Bubble tea">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
                   <div class="col mb-5">
                       <div class="card h-100">
                           <!-- Product image-->
                           <img class="card-img-top" src="https://images.deliveryhero.io/image/fd-sg/LH/y8bv-listing.jpg?width=450&amp;height=450&quot" alt="..." />
                           <!-- Product details-->
                           <div class="card-body p-4">
                               <div class="text-center">
                                   <!-- Product name-->
                                   <h5 class="fw-bolder">The Alley (Tampines Central)</h5>
                                   <!-- Product reviews-->
                                   <div class="d-flex justify-content-center small text-warning mb-2">
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                       <div class="bi-star-fill"></div>
                                   </div>
                                   $50.00

                               </div>
                           </div>
                           <!-- Product actions-->
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="checkout.php?code=y8bv&price=50&itemName=The Alley (Tampines Central)">Buy Now</a></div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>












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
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>


    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

</body></html>

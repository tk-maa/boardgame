<header class="header-3">
    <div class="header-top bg-white">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-2 col-sm-3">
                    <div class="header-logo">
                        <a href="index.php"><img src="img/logo.png" alt="logo" width="150px"></a>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-9 order-lg-last">
                    <ul class="header-options">
                        <li><a href="#test-popup1" class="open-popup-link">Đăng nhập</a>
                            <div id="test-popup1" class="white-popup lr-popup mfp-hide text-center">
                                <h4>Đăng nhập</h4>
                                <form class="subscribe-popup-form" id="login-form">
                                    <input id="email" name="email" required type="email" placeholder="Địa chỉ Email">
                                    <input id="password" name="password" required type="password" placeholder="Mật khẩu">
                                    <div class="form-check text-left">
                                        <label>Ghi nhớ tài khoản
                                            <input class="defult-check" type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                        <a href="#" class="forgot-password float-right">Quên mật khẩu?</a>
                                    </div>
                                    <button class="btn btn-primary" title="Login" type="button">Đăng nhập</button>
                                </form>
                                <h6>Bạn không có tài khoản?</h6>
                                <a href="#test-popup2" class="sign-up open-popup-link">Đăng ký</a>
                            </div>
                            <div id="test-popup2" class="white-popup lr-popup mfp-hide">
                                <h4>Đăng ký</h4>
                                <form class="subscribe-popup-form" method="post" action="#">
                                    <input name="input" required type="input" placeholder="Họ và tên">
                                    <input name="email" required type="email" placeholder="Email">
                                    <input name="password" required type="password" placeholder="Mật khẩu">
                                    <input name="password" required type="password" placeholder="Xác nhận mật khẩu">
                                    <div class="form-check">
                                        <label>Tôi chấp nhận điều khoản
                                            <input class="defult-check" type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <button class="btn btn-primary" type="button">Đăng ký</button>
                                </form>
                            </div>
                        </li>
                        <li class="header-cart">
                            <?php
                            if (isset($_SESSION["cart_item"])) {
                                $total_quantity = 0;
                                $total_price = 0;
                                foreach ($_SESSION["cart_item"] as $item) {
                                    $item_price = $item["Quantity"] * $item["Price"];
                                    $total_quantity += $item["Quantity"];
                                    $total_price += $item_price;
                                }
                            }
                            ?>
                            <a href="cart.php">
                                <div class="cart-icon">
                                    <i class="ion-ios-cart"></i>
                                    <span id="tongSoLuongSPGioHang"><?php echo (isset($_SESSION["cart_item"]) ? $total_quantity : "0") ?></span>
                                </div>Giỏ hàng
                                <i class="fa fa-angle-down"></i>
                            </a>
                            <div class="cart-box cart_box_left" id="cartBox">
                                <div class="cart-info">
                                    <?php
                                    if (isset($_SESSION["cart_item"])) {
                                        foreach ($_SESSION["cart_item"] as $item) {
                                            $item_price = $item["Quantity"] * $item["Price"];
                                            echo "<div class='cart-prodect d-flex justify-content-between'>" .
                                                "<div class='cart-img'>" .
                                                "<img src='./img/sanpham/" . $item["Pic"] . "' >" .
                                                "</div>" .
                                                "<div class='cart-product'>" .
                                                "<a href='product-detail.php?id=" . $item["ID"] . "'>" . $item["Name"] . "</a>" .
                                                "<p style='color: black; font-size: 13px'>Số lượng: " . $item["Quantity"] . "</p>" .
                                                "<p>" . number_format($item_price, 0, ".", ".") . "₫</p>" .
                                                "</div>" .
                                                "<a href='#' onclick='removeFromCart(" . $item["ID"] . ")' class='close-icon d-flex align-items-center'><i class='ion-close'></i></a>" .
                                                "</div>";
                                        }
                                        echo "</div>" .
                                            "<div class='price-prodect d-flex align-items-center justify-content-between'>" .
                                            "<p class='total'>Tổng cộng</p>" .
                                            "<p class='total-price'>" . number_format($total_price, 0, ".", ".") . "₫</p>" .
                                            "</div>" .
                                            "<div class='cart-btn'>" .
                                            "<a href='cart.php' class='btn btn-primary'>Xem giỏ hàng</a>" .
                                            "</div>";
                                    } else {
                                        echo "<div class='cart-prodect d-flex'>" .
                                            "<p>Giỏ hàng của bạn chưa có sản phẩm nào</p>" .
                                            "</div>" .
                                            "</div>";
                                    }
                                    ?>
                                </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <form class="header-form form-sm search_wrap pull-right">
                        <input class="search-box" placeholder="Tìm kiếm..." type="search">
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <div class="header-btm border-0 navy-dark-bg h-auto">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-5 col-8 pl-0">
                    <div class="menu-wrap position-relative">
                        <button type="button" class="categories-btn btn-block">
                            <i class="ion-ios-list-outline"></i><span>Sản Phẩm</span>
                        </button>
                        <nav id="mega-dropdown-menu" class="section-shadow">
                            <ul class="list-unstyled components">
                                <?php
                                require_once 'php/DataProvider.php';
                                $FirstMenuArray = array();
                                $SecondMenuArray = array();

                                class firstMenu
                                {

                                    function __construct($menuID, $ten, $link)
                                    {
                                        $this->menuID = $menuID;
                                        $this->ten = $ten;
                                        $this->link = $link;
                                    }
                                }
                                class secondMenu extends firstMenu
                                {
                                    var $menuIDFirst;

                                    function __construct($menuID, $menuIDFirst, $ten, $link)
                                    {
                                        parent::__construct($menuID, $ten, $link);
                                        $this->menuIDFirst = $menuIDFirst;
                                    }
                                }

                                $sql = "select * from menu_first";
                                $result = DataProvider::executeQuery($sql);
                                while ($row = mysqli_fetch_array($result)) {
                                    $FirstMenuArray[] = new firstMenu($row['ID'], $row['Ten'], $row['Link']);
                                }
                                $sql = "select * from menu_second";
                                $result = DataProvider::executeQuery($sql);
                                while ($row = mysqli_fetch_array($result)) {
                                    $SecondMenuArray[] = new secondMenu($row['ID'], $row['MenuIDFirst'], $row['Ten'], $row['Link']);
                                }

                                $haveSecond = false;

                                foreach ($FirstMenuArray as $currentFirst) {
                                    echo "<li>" .
                                        "<a class='dropdown-toggler' href='" . $currentFirst->link . "' data-toggle='dropdown' aria-expanded='false'>" . $currentFirst->ten;
                                    foreach ($SecondMenuArray as $currentSecond) {
                                        if ($currentSecond->menuIDFirst == $currentFirst->menuID) {
                                            if ($haveSecond == false) {
                                                echo "<i class='ion-plus-round plus-icon'></i><i class='ion-minus-round minus-icon'></i></a> " .
                                                    "<ul class='dropdown-menu list-unstyled'>";
                                                $haveSecond = true;
                                            }
                                            echo "<li class='second-menu'><a href='" . $currentSecond->link . "'>" . $currentSecond->ten . "</a></li>";
                                        }
                                    }
                                    if ($haveSecond == true) {
                                        echo "</ul>" .
                                            "</li>";
                                    } else {
                                        echo "</a></li>";
                                    }
                                    $haveSecond = false;
                                }
                                ?>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-7 col-4 m_menu">
                    <div class="d-lg-none">
                        <div class="form-captions" id="search">
                            <button type="submit" class="submit-btn-2"><i class="fa fa-search"></i></button>
                        </div>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown active">
                                    <a class="nav-link dropdown-toggler" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TRANG CHỦ</a>
                                </li>
                                <li class="dropdown">
                                    <a class="nav-link dropdown-toggler" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CHÍNH SÁCH<i class="fa fa-angle-down"></i><i class="fa fa-angle-right"></i></a>
                                    <div class="sub-menu dropdown-menu">
                                        <ul class="all-menu">
                                            <li><a href="error-404.html">BẢO HÀNH</a></li>
                                            <li><a href="faq.html">VÂN CHUYỂN</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">LIÊN HỆ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
  <div class="sidebar-brand-text mx-3 logo">
    <img src="../img/logo.png" style="width:100%">
  </div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-tachometer-alt"></i>
    <span>Bảng Điều Khiển</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
  Giao Diện
</div>

<!-- Nav Item - Pages Collapse Menu -->
<?php
foreach($_SESSION["isLogin"] as $k => $v) {
  if($_SESSION['isLogin'][$k]["Role"] == "Admin"){
?>
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    <i class="fas fa-fw fa-cog"></i>
    <span>Banner</span>
  </a>
  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <a class="collapse-item" href="banner.php">Banner Trang chủ</a>
    </div>
  </div>
</li>
<?php 
  }
}
?>
<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
  Hệ Thống
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct">
    <i class="fas fa-fw fa-folder"></i>
    <span>Sản phẩm</span>
  </a>
  <div id="collapseProduct" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <a class="collapse-item" href="type.php">Loại sản phẩm</a>
      <a class="collapse-item" href="product.php">Sản phẩm</a>
    </div>
  </div>
</li>
<?php
foreach($_SESSION["isLogin"] as $k => $v) {
  if($_SESSION['isLogin'][$k]["Role"] == "Admin"){
?>
<!-- Nav Item - Charts -->
<li class="nav-item">
  <a class="nav-link" href="charts.html">
    <i class="fas fa-fw fa-chart-area"></i>
    <span>Đơn hàng</span>
  </a>
</li>

<!-- Nav Item - Tables -->
<li class="nav-item">
  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAccount" aria-expanded="true" aria-controls="collapseAccount">
    <i class="fas fa-fw fa-table"></i>
    <span>Tài khoản</span>
  </a>
  <div id="collapseAccount" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
    <div class="bg-white py-2 collapse-inner rounded">
      <a class="collapse-item" href="type.php">Ban quản trị</a>
      <a class="collapse-item" href="product.php">Người dùng</a>
    </div>
  </div>
</li>
<?php
  }
}
?>
<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
  <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
<!-- End of Sidebar -->
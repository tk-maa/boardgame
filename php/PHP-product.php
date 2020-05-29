<?php
session_start();
require_once 'DataProvider.php';

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'paginationGetData': paginationGetData();break;
        case 'paginationGetPages': paginationGetPages();break;
    }
}

function paginationGetData(){
    $sortBrand = addslashes($_POST['sortBrand']);
    $sortBasic = addslashes($_POST['sortBasic']);
    $sortType = addslashes($_POST['sortType']);
    $numOfItems = addslashes($_POST['numOfItems']);
    $currentPage = addslashes($_POST['currentPage']);

    $sql = "SELECT * FROM sanpham WHERE active = 1 AND MALSP = '".$sortType."' ";

    if($sortBrand != '0' ){
        $sql.="AND Hang = '".$sortBrand."' ";
    }

    switch($sortBasic){
        case "1": $sql.="ORDER BY TenSP ASC ";break;
        case "2": $sql.="ORDER BY TenSP DESC ";break;
        case "3": $sql.="ORDER BY GiaTien ASC ";break;
        case "4": $sql.="ORDER BY GiaTien DESC ";break;
    }

    $sql.= " LIMIT ". (($currentPage-1)*$numOfItems) .",".(($currentPage-1)*$numOfItems+$numOfItems);


    $result = DataProvider::executeQuery($sql);
    $allProducts = array();
    while ($row = mysqli_fetch_array($result))
	{
		$allProducts[] = array(
			"MaSP" => $row['MaSP'], 
			"TenSP" => $row['TenSP'],
			"GiaTien" => $row['GiaTien'],
			"Hinh" => $row['Hinh']
		);
	}
	echo json_encode($allProducts);
    die;
}
function paginationGetPages(){
    $sortBrand = addslashes($_POST['sortBrand']);
    $sortType = addslashes($_POST['sortType']);

    $sql = "SELECT COUNT(*) FROM sanpham WHERE active = 1 AND MALSP = '".$sortType."' ";

    if($sortBrand != '0' ){
        $sql.="AND Hang = '".$sortBrand."' ";
    }

    $result = DataProvider::executeQuery($sql);
    $r_count = mysqli_fetch_row($result); //number of items
    $numberOfItems = $r_count[0];
    
    echo ($numberOfItems);
    die;
}
?>
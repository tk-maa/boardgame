<?php
session_start();
require_once 'DataProvider.php';

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'addToCart': addToCart();break;
		case 'removeFromCart': removeFromCart();break;
        case 'updateQuantity': updateQuantity();break;
        case 'checkOut': checkOut();break;
        case 'quickView': quickView();break;
    }
}

function custom_array_column($array,$nameOfColumn)
{										
	$result = array();
  	foreach($array as $element)
  	{
    	foreach($element as $key => $value)
        {
          	if($key == $nameOfColumn)		
            {
                array_push($result,$value);
            }
		}
  	}
    return $result;
}

function addToCart(){
    $ID = addslashes($_POST['ID']);
    $quantity = addslashes($_POST['quantity']);

    $sql = "SELECT * FROM product WHERE ID = '".$ID."'";
    if(!empty($_SESSION["cart_item"])) {
        $item_array_id = custom_array_column($_SESSION['cart_item'], "ID");
        if (in_array($ID, $item_array_id)) {
            foreach($_SESSION["cart_item"] as $k => $v) {
                if($_SESSION["cart_item"][$k]["ID"] == $ID ) {
                    if(empty($_SESSION["cart_item"][$k]["Quantity"])) {
                        $_SESSION["cart_item"][$k]["Quantity"] = 0;
                    }
                    $_SESSION["cart_item"][$k]["Quantity"] += $quantity;
                }
            }
        } else {
            $result = DataProvider::executeQuery($sql);
            while ($row = mysqli_fetch_array($result))
            {
                $itemArray = array('Name'=>$row['Name'], 'ID'=>$row['ID'], 'Quantity'=>$quantity, 'Price'=>$row['Price'], 'Pic'=>$row['Pic']);
            }
            $_SESSION["cart_item"] = array_merge($_SESSION["cart_item"],array($itemArray));
        }
    }  else {
        $result = DataProvider::executeQuery($sql);
        while ($row = mysqli_fetch_array($result))
        {
            $itemArray = array('Name'=>$row['Name'], 'ID'=>$row['ID'], 'Quantity'=>$quantity, 'Price'=>$row['Price'], 'Pic'=>$row['Pic']);
        }
        $_SESSION["cart_item"] = array($itemArray);
    }
    echo json_encode($_SESSION["cart_item"]);
    die;
}

function removeFromCart(){
    $ID = addslashes($_POST['ID']);

    if(!empty($_SESSION["cart_item"])) {
        foreach($_SESSION["cart_item"] as $k => $v) {
            if($_SESSION["cart_item"][$k]["ID"] == $ID ) 
                unset($_SESSION["cart_item"][$k]);				
            if(empty($_SESSION["cart_item"]))
                unset($_SESSION["cart_item"]);
        }
    }
    if(isset($_SESSION["cart_item"])){
        $_SESSION["cart_item"] = array_values($_SESSION["cart_item"]);
        echo json_encode($_SESSION["cart_item"]);
        die;
    } else { 
        echo "0";
        die;
    }
}

function updateQuantity(){
    $ID = addslashes($_POST['ID']);
    $quantity = addslashes($_POST['quantity']);

    if(!empty($_SESSION["cart_item"])) {
        foreach($_SESSION["cart_item"] as $k => $v) {
            if($_SESSION["cart_item"][$k]["ID"] == $ID ) {
                $_SESSION["cart_item"][$k]["Quantity"] = $quantity;
            }
        }
    }  
    
    echo json_encode($_SESSION["cart_item"]);
    die;
}

function checkOut(){
	$hoVaTen = addslashes($_POST['hoVaTen']);
	$sdt = addslashes($_POST['sdt']);
    $diaChi = addslashes($_POST['diaChi']);
    $tongTien = 0;
    $tongSoLuong = 0;

    if(!empty($_SESSION["cart_item"])) {
        foreach($_SESSION["cart_item"] as $k => $v) {
            $tongSoLuong += $_SESSION["cart_item"][$k]["SoLuong"];
            $tongTien += $_SESSION["cart_item"][$k]["GiaTien"] * $_SESSION["cart_item"][$k]["SoLuong"];
        }
    } else {
        die;
    }
	
	$sql = "INSERT INTO hoadon(HoTen, DiaChi, SDT, SoLuongTong, TongTien, ThanhTien) VALUES(". 
			"'" .$hoVaTen. "'," . 
			"'" .$diaChi. "'," . 
			"'" .$sdt. "'," . 
			"'" .$tongSoLuong. "'," . 
			"'" .$tongTien. "'," .			
			"'" .$tongTien. "')";
	DataProvider::executeQuery($sql);
	
	$sql = "SELECT MaHD FROM hoadon ORDER BY MaHD DESC LIMIT 1";
	$result = DataProvider::executeQuery($sql);
	$row = mysqli_fetch_array($result);
	$maHD = $row['MaHD']; 
	foreach($_SESSION["cart_item"] as $k => $v) {
		$sql = "INSERT INTO cthoadon(MaHD, MaSP, SoLuong, DonGia) VALUES(".
			"'" .$maHD. "'," . 
			"'" .$_SESSION["cart_item"][$k]["MaSP"]. "'," . 
			"'" .$_SESSION["cart_item"][$k]["SoLuong"]."'," . 
			"'" .$_SESSION["cart_item"][$k]["GiaTien"]."')";
		DataProvider::executeQuery($sql);
    }
    unset($_SESSION["cart_item"]);
    echo ("Đặt hàng thành công!");
    die;
}

function quickView(){
    $ID = addslashes($_POST['ID']);
    $allPictures = array();
    $sql = "SELECT * FROM product Where ID = '".$ID."'";
    $result = DataProvider::executeQuery($sql);
    while ($row = mysqli_fetch_array($result))
	{
		$sanpham  = array(
			"ID" => $row['ID'],
			"Name" => $row['Name'],
			"Status" => $row['Status'],
			"Price" => $row['Price'],
            "Pic" => $row['Pic'],
            "NoP" => $row['NoP'],
            "NoPsg" => $row['NoPsg'],
            "Time" => $row['Time'],
            "Age" => $row['Age'],
            "Quantity" => $row['Quantity']
        );
        array_push($allPictures,$row['Pic']);
    }
    $sql = "SELECT * FROM images Where ProductID='".$ID."' order by ID asc";
	$result = DataProvider::executeQuery($sql);
	while ($row = mysqli_fetch_array($result))
	{
		array_push($allPictures, $row['Image']);
	}
    $sanpham += array("allPic"=>$allPictures);
    echo json_encode($sanpham);
    die;
}

?>
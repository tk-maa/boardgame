<?php
require_once 'DataProvider.php';
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
		case 'addBrand': addBrand();break;
		case 'editBrand': editBrand();break;
		case 'deleteBrand': deleteBrand();break;
    }
}
function addBrand(){
	$mahang = addslashes($_POST['mahang']);
	$tenhang = addslashes($_POST['tenhang']);
	
	$sql = "INSERT INTO hang(MaHang, TenHang) VALUES(" .
			"'" .$mahang. "'," . 
			"'" .$tenhang. "')"; 

	DataProvider::executeQuery($sql);
	die("0");
}
function editBrand(){
	$mahang = addslashes($_POST['mahang']);
	$tenhang = addslashes($_POST['tenhang']);
	$mahangCu = addslashes($_POST['mahangCu']);
	
	$sql = "UPDATE hang SET" .
		" TenHang='". $tenhang . "'";
	
	if( $mahang != $mahangCu){
		$sql .=", MaHang='".$mahang."'";
	}
	
	$sql .=" WHERE MaHang='" . $mahangCu . "';";
	DataProvider::executeQuery($sql);
	die("0");
}
function deleteBrand(){
	$mahang = addslashes($_POST['mahang']);

	$sql =" DELETE FROM hang where MaHang='" . $mahang . "';";
	DataProvider::executeQuery($sql);
	die("0");
}

?>

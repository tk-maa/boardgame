<?php
require_once 'DataProvider.php';
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
		case 'addType': addType();break;
		case 'editType': editType();break;
		case 'deleteType': deleteType();break;
    }
}
function addType(){
	$malsp = addslashes($_POST['malsp']);
	$tenlsp = addslashes($_POST['tenlsp']);
	
	$sql = "INSERT INTO loaisanpham(MaLSP, TenLSP) VALUES(" .
			"'" .$malsp. "'," . 
			"'" .$tenlsp. "')"; 

	DataProvider::executeQuery($sql);
	die("0");
}
function editType(){
	$malsp = addslashes($_POST['malsp']);
	$tenlsp = addslashes($_POST['tenlsp']);
	$malspCu = addslashes($_POST['malspCu']);
	
	$sql = "UPDATE loaisanpham SET" .
		" TenLSP='". $tenlsp . "'";
	
	if( $malsp != $malspCu){
		$sql .=", MaLSP='".$malsp."'";
	}
	
	$sql .=" WHERE MaLSP='" . $malspCu . "';";
	DataProvider::executeQuery($sql);
	die("0");
}
function deleteType(){
	$malsp = addslashes($_POST['malsp']);

	$sql =" DELETE FROM loaisanpham where MaLSP='" . $malsp . "';";
	DataProvider::executeQuery($sql);
	die("0");
}

?>

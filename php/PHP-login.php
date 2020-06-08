<?php
session_start();
require_once 'DataProvider.php';
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
		case 'login': login();break;
		case 'logout': logout();break;
		case 'signup': signup();break;
    }
}
function login(){
	$email = addslashes($_POST['email']);
	$password = addslashes($_POST['password']);
	
	$sql = "SELECT * FROM user WHERE Email='". $email ."' AND Password = '". $password ."'";
	$result = DataProvider::executeQuery($sql);
	if( mysqli_num_rows($result) == 0 ) {
		die("1");
	} else {
		while ($row = mysqli_fetch_array($result))
		{
			$loginInformation = array('Email'=>$row['Email'], 'Name'=>$row['Name']);
		}
		$_SESSION["isLoginUser"] = array($loginInformation);
		die("0");
	}
	
}

function signup(){
	$name = addslashes($_POST['name']);
	$email = addslashes($_POST['email']);
	$password = addslashes($_POST['password']);
	
	$sql = "SELECT * FROM user WHERE Email='". $email ."'";
	$result = DataProvider::executeQuery($sql);
	if( mysqli_num_rows($result) != 0 ) {
		die("1");
	}

	$sql = "INSERT INTO user(Name, Email, Password) VALUES(" .
			"'" .$name. "'," . 
			"'" .$email. "'," . 
			"'" .$password. "')";
	$result = DataProvider::executeQuery($sql);
	$loginInformation = array('Email'=>$email, 'Name'=>$name);
	$_SESSION["isLoginUser"] = array($loginInformation);
	die("0");
}

function logout(){
	unset($_SESSION["isLoginUser"]);
	die("0");
}

?>

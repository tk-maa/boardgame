<?php
require_once 'DataProvider.php';
if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'getAllProducts': getAllProducts();break;
		case 'addProduct': addProduct();break;
		case 'editProduct': editProduct();break;
		case 'deleteProduct': deleteProduct();break;
		case 'uploadImage': uploadImage();break;
		case 'deleteImage': deleteImage();break;
		case 'toggleActive': toggleActive();break;
		
    }
}
function getAllProducts(){
	$sql = "select * from sanpham order by STT";
	$result = DataProvider::executeQuery($sql);
	$allProducts = array();

	while ($row = mysqli_fetch_array($result))
	{
		$allProducts[] = array(
			"MaSP" => $row['MaSP'],
			"STT" => $row['STT'],
			"TenSP" => $row['TenSP'],
			"SoLuong" => $row['SoLuong'],
			"GiaTien" => $row['GiaTien'],
			"Hinh" => $row['Hinh']
		);
	}
	echo json_encode($allProducts);
}
function addProduct(){
	$name = addslashes($_POST['name']);
	$NoP = addslashes($_POST['NoP']);
	$price = addslashes($_POST['price']);
	$NoPsg = addslashes($_POST['NoPsg']);
	$age = addslashes($_POST['age']);
	$time = addslashes($_POST['time']);
	$type = addslashes($_POST['type']);
	$status = addslashes($_POST['status']);
	$description = addslashes($_POST['description']);
	
	$extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
	$filename = md5(time().$_FILES['file']['name']);
	$filename = $filename .".". $extension;
	
	move_uploaded_file($_FILES['file']['tmp_name'], '../img/sanpham/'.$filename);
	$sql = "INSERT INTO product(Name, Description, Type, NoP, NoPsg, Time, Age, Price, Pic, Status) VALUES(" .
			"'" .$name. "'," . 
			"'" .$description. "'," . 
			"'" .$type. "'," . 
			"'" .$NoP. "'," . 
			"'" .$NoPsg. "',".
			"'" .$time. "',".
			"'" .$age. "',".
			"'" .$price. "',".
			"'" .$filename. "',".
			"'" .$status. "')";
	DataProvider::executeQuery($sql);
	die("0");
}
function editProduct(){
	$masp = addslashes($_POST['masp']);
	$tensp = addslashes($_POST['tensp']);
	$stt = addslashes($_POST['stt']);
	$mota = addslashes($_POST['mota']);
	$hang = addslashes($_POST['hang']);
	$loaisp = addslashes($_POST['loaisp']);
	$thongso = addslashes($_POST['thongso']);
	$gia = addslashes($_POST['gia']);
	$soluong = addslashes($_POST['soluong']);
	$model = addslashes($_POST['model']);
	$havePic = $_POST['havePic'];
	$changeSTT = $_POST['changeSTT'];
	$trangthai = addslashes($_POST['trangthai']);
	
	$sql = "UPDATE sanpham SET" .
		" TenSP='". $tensp . "',".
		" MoTa='" . $mota . "'," . 
		" Hang='" . $hang . "'," . 
		" Model='" . $model . "'," . 
		" MaLSP='" . $loaisp . "',".
		" ThongSo='". $thongso . "',".
		" SoLuong='". $soluong . "',".
		" GiaTien='". $gia . "',".
		" active='". $trangthai . "'";
	
	if( $havePic == "true"){
		$extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
		$filename = md5(time().$_FILES['file']['name']);
		$filename = $filename .".". $extension;
		
		move_uploaded_file($_FILES['file']['tmp_name'], '../img/sanpham/'.$filename);
		$sql .=", Hinh='".$filename."'";
	}
	if( $changeSTT == "true"){
		$tempSQL= "Select STT from sanpham where masp='".$masp."'";
		$row = mysqli_fetch_array(DataProvider::executeQuery($tempSQL));
		$currentSTT = $row['STT'];
		if($currentSTT > $stt){
			$tempSQL = "UPDATE sanpham SET STT = STT + 1 where STT >= '".$stt."' AND STT <'".$currentSTT."'";
		} else if( $currentSTT < $stt){
			$tempSQL = "UPDATE sanpham SET STT = STT - 1 where STT > '".$currentSTT."' AND STT <='".$stt."'";
		}
		DataProvider::executeQuery($tempSQL);
		$sql .=", STT='".$stt."'";
	}
	
	$sql .=" WHERE MaSP='" . $masp . "';";
	DataProvider::executeQuery($sql);
	die("0");
}
function deleteProduct(){
	$masp = addslashes($_POST['masp']);
	$sql =" DELETE FROM sanpham where MaSP='" . $masp . "';";
	DataProvider::executeQuery($sql);
	die("0");
}
function uploadImage(){
	$masp = addslashes($_POST['masp']);
	$countfiles = count($_FILES['files']['name']);
	$sql ="INSERT INTO Hinh(MaHinh, MaSP, Hinh) VALUES";
	for($i = 0;$i < $countfiles;$i++){
		//Change name each of image
		$extension = pathinfo($_FILES['files']['name'][$i], PATHINFO_EXTENSION);
		$filename = md5(time().$_FILES['files']['name'][$i]);
		$filename = $filename .".". $extension;

		move_uploaded_file($_FILES['files']['tmp_name'][$i], '../img/sanpham/'.$filename);
		$sql .="(NULL, '".$masp."', '".$filename."')";
		if( $i != $countfiles-1)
			$sql .=",";
	}
	DataProvider::executeQuery($sql);
	$sql = "SELECT * FROM HINH Where MaSP='".$masp."' order by MaHinh asc";
	$result = DataProvider::executeQuery($sql);
	$allPictures = array();
	while ($row = mysqli_fetch_array($result))
	{
		$allPictures[] = array(
			"MaSP" => $row['MaSP'],
			"MaHinh" => $row['MaHinh'],
			"Hinh" => $row['Hinh']
		);
	}
	echo json_encode($allPictures);
}
function deleteImage(){
	$maHinh = addslashes($_POST['maHinh']);
	$masp = addslashes($_POST['masp']);
	$sql =" DELETE FROM hinh where MaHinh='" . $maHinh . "';";
	DataProvider::executeQuery($sql);

	$sql = "SELECT * FROM HINH Where MaSP='".$masp."' order by MaHinh asc";
	$result = DataProvider::executeQuery($sql);
	while ($row = mysqli_fetch_array($result))
	{
		$allPictures[] = array(
			"MaSP" => $row['MaSP'],
			"MaHinh" => $row['MaHinh'],
			"Hinh" => $row['Hinh']
		);
	}
	echo json_encode($allPictures);
}
function toggleActive(){
	$trangthai = addslashes($_POST['trangthai']);
	$masp = addslashes($_POST['masp']);
	$sql =" UPDATE sanpham set active = ".$trangthai." where MaSP='".$masp."'";
	DataProvider::executeQuery($sql);
	die('0');
}

?>

function toggleDisableSttInput(){
	if(document.getElementById("sttSelection1").checked){
		document.getElementById("product-form").stt.disabled = true;
	}
	if(document.getElementById("sttSelection2").checked){
		document.getElementById("product-form").stt.disabled = false;
	}
}
function addProduct(){
	var name = document.getElementById("product-form").name;
	var description = document.getElementById("product-form").description;
	var type = document.getElementById("product-form").type;
	var NoP = document.getElementById("product-form").NoP;
	var NoPsg = document.getElementById("product-form").NoPsg;
	var time = document.getElementById("product-form").time;
	var age = document.getElementById("product-form").age;
	var price = document.getElementById("product-form").price;
	var image = document.getElementById("product-form").image;
	var status = document.getElementById("product-form").status;
	
	var form_data = new FormData();
	
	if (name.value==""){
		alert("Tên sản phẩm không được để trống!");
		name.focus();
		return;
	}

	if (NoP.value==""){
		alert("Số người chơi không được để trống!");
		NoP.focus();
		return;
	} else {
		var format = /(^([0-9]{1,2})$)|(^([0-9]{1,2} - [0-9]{1,3})$)/;
		if(format.test(NoP.value)==false){
			alert("Số người chơi không hợp lệ");
			NoP.focus();
			return;	
		}
	}
	
	if (NoPsg.value==""){
		alert("Số người chơi lý tưởng không được để trống!");
		NoPsg.focus();
		return;
	} else {
		var format = /(^([0-9]{1,2})$)|(^([0-9]{1,2} - [0-9]{1,3})$)/;
		if(format.test(NoPsg.value)==false){
			alert("Số người chơi lý tưởng không hợp lệ");
			NoPsg.focus();
			return;	
		}
	}
	
	if (time.value==""){
		alert("Thời gian chơi không được để trống!");
		time.focus();
		return;
	} else {
		var format = /(^([0-9]{1,3})$)|(^([0-9]{1,3}-[0-9]{1,3})$)|(^(...)$)/;
		if(format.test(time.value)==false){
			alert("Thời gian chơi không hợp lệ");
			time.focus();
			return;	
		}
	}
	
	if (age.value==""){
		alert("Độ tuổi không được để trống!");
		age.focus();
		return;
	} else {
		var format = /^([0-9]{1,2})[+]$/;
		if(format.test(age.value)==false){
			alert("Độ tuổi không hợp lệ");
			age.focus();
			return;	
		}
	}

	if (description.value==""){
		alert("Mô tả sản phẩm không được để trống!");
		description.focus();
		return;
	}
	
	if (price.value==""){
		alert("Giá sản phẩm không được để trống!");
		price.focus();
		return;
	} else {
		var format = /^([0-9]{1,10})$/;
		if(format.test(price.value)==false){
			alert("Giá sản phẩm không hợp lệ");
			price.focus();
			return;	
		}
	}
	
	
	
	if ( image.files.length == 0 ||  image.files.length > 1){
		alert("Xin chọn 1 ảnh");
		image.focus();
		return;
	} else {
		var test_value = image.files[0].name;
		var extension = test_value.split('.').pop().toLowerCase();

		if ($.inArray(extension, ['png', 'gif', 'jpeg', 'jpg']) == -1) {
		  alert("File ảnh không hợp lệ!");
		  image.focus();
		  return;
		}
	}
	
	var file_data = document.getElementById("image").files[0];
	
	form_data.append('action','addProduct');
	form_data.append('file', file_data);
	form_data.append('price',price.value);
	form_data.append('name',name.value);
	form_data.append('NoP',NoP.value);
	form_data.append('NoPsg',NoPsg.value);
	form_data.append('time',time.value);
	form_data.append('age',age.value);
	form_data.append('type',type.value);
	form_data.append('status',status.value);
	form_data.append('description',description.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-product.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Thêm sản phẩm thành công!");
					document.getElementById("product-form").reset();
					window.location.href = "product.php";
				}break;
			}
		}
	});
	
}

function editProduct(){
	var tensp = document.getElementById("product-form").tensp;
	var stt = document.getElementById("product-form").stt;
	var mota = document.getElementById("product-form").mota;
	var hang = document.getElementById("product-form").hang;
	var loaisp = document.getElementById("product-form").loaisp;
	var thongso = document.getElementById("product-form").thongso;
	var gia = document.getElementById("product-form").gia;
	var soluong = document.getElementById("product-form").soluong;
	var model = document.getElementById("product-form").model;
	var hinh = document.getElementById("product-form").hinh;
	var masp = document.getElementById("product-form").masp;
	var trangthai = document.getElementById("product-form").trangthai;
	
	var form_data = new FormData();
	
	if (tensp.value==""){
		alert("Tên sản phẩm không được để trống!");
		tensp.focus();
		return;
	}
	
	if(document.getElementById("sttSelection2").checked){
		if (stt.value==""){
		alert("Số thứ tự sản phẩm không được để trống!");
		stt.focus();
		return;
		} else {
			var format = /^([0-9]{1,10})$/;
			if(format.test(stt.value)==false){
				alert("Số thứ tự sản phẩm không hợp lệ");
				stt.focus();
				return;	
			}
			if(parseInt(stt.value) > document.getElementById("totalProduct").value){
				alert("Số thứ tự sản phẩm vượt quá số lượng sản phẩm");
				stt.focus();
				return;	
			}
			form_data.append('changeSTT','true');
		}
	}else if(document.getElementById("sttSelection1").checked){
		form_data.append('changeSTT','false');
	}
	
	if (mota.value==""){
		alert("Mô tả sản phẩm không được để trống!");
		mota.focus();
		return;
	}
	if (thongso.value==""){
		alert("Thông số sản phẩm không được để trống!");
		thongso.focus();
		return;
	}
	
	if (gia.value==""){
		alert("Giá sản phẩm không được để trống!");
		gia.focus();
		return;
	} else {
		var format = /^([0-9]{4,10})$/;
		if(format.test(gia.value)==false){
			alert("Giá sản phẩm không hợp lệ");
			gia.focus();
			return;	
		}
	}
	
	if (soluong.value==""){
		alert("Số lượng sản phẩm không được để trống!");
		soluong.focus();
		return;
	} else {
		var format = /^([0-9]{1,10})$/;
		if(format.test(gia.value)==false){
			alert("Số lượng sản phẩm không hợp lệ");
			soluong.focus();
			return;	
		}
	}

	
	if ( hinh.files.length == 1){
		var test_value = hinh.files[0].name;
		var extension = test_value.split('.').pop().toLowerCase();
		if ($.inArray(extension, ['png','jpeg', 'jpg']) == -1) {
		  alert("File ảnh không hợp lệ! Ảnh phải là file PNG, JPEG, JPG");
		  hinh.focus();
		  return;
		}
		var file_data = document.getElementById("hinh").files[0];
		form_data.append('havePic','true');
	} else {
		var file_data = "";
		form_data.append('havePic','false');
	}
	
	form_data.append('action','editProduct');
	form_data.append('file', file_data);
	form_data.append('tensp',tensp.value);
	form_data.append('stt',stt.value);
	form_data.append('mota',mota.value);
	form_data.append('hang',hang.value);
	form_data.append('loaisp',loaisp.value);
	form_data.append('thongso',thongso.value);
	form_data.append('gia',gia.value);
	form_data.append('soluong',soluong.value);
	form_data.append('model',model.value);
	form_data.append('masp',masp.value);
	form_data.append('trangthai',trangthai.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-product.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Lưu thông tin thành công!");
					document.getElementById("product-form").reset();
					window.location.href = "product.php";
				}break;
			}
		}
	});
	
}
function deleteProduct(masp){
	var r = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
	if (r == true) {
		var form_data = new FormData();
		form_data.append('masp',masp);
		form_data.append('action','deleteProduct');
		
		jQuery.ajax({
			type: "POST",
			url: '../php/PHP-admin-product.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data : form_data,
			success:function(res){
				switch(res){
					case "0":{
						alert("Xóa sản phẩm thành công!");
						if(window.location.href.includes("productform.php")){
							document.getElementById("product-form").reset();
							window.location.href = "product.php";
						} else {
							location.reload();
						}
					}break;
				}
			}
		});
	} else {}
}
function toggleActive(trangthai,masp){
	if (trangthai == 0)
		var r = confirm("Bạn có chắc chắn muốn bất hoạt sản phẩm này không?");
	else 
		var r = confirm("Bạn có chắc chắn muốn kích hoạt sản phẩm này không?");
	if (r == true) {
		var form_data = new FormData();
		form_data.append('masp',masp);
		form_data.append('trangthai',trangthai);
		form_data.append('action','toggleActive');
		
		jQuery.ajax({
			type: "POST",
			url: '../php/PHP-admin-product.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data : form_data,
			success:function(res){
				switch(res){
					case "0":{
						if (trangthai == 0)
							alert("Bất hoạt sản phẩm thành công!");
						else 
							alert("Kích hoạt sản phẩm thành công!");
						location.reload();
					}break;
				}
			}
		});
	} else {}
}
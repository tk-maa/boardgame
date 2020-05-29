function addBanner(){
	var lienket = document.getElementById("banner-form").lienket;
	var vitri = document.getElementById("banner-form").vitri;
	var hinh = document.getElementById("banner-form").hinh;
	
	var form_data = new FormData();
	
	if (lienket.value==""){
		alert("Liên kết banner không được để trống!");
		lienket.focus();
		return;
	}
	
	if ( hinh.files.length == 0 ||  hinh.files.length > 1){
		alert("Xin chọn 1 ảnh");
		hinh.focus();
		return;
	} else {
		var test_value = hinh.files[0].name;
		var extension = test_value.split('.').pop().toLowerCase();

		if ($.inArray(extension, ['png','jpeg', 'jpg']) == -1) {
		  alert("File ảnh không hợp lệ! Ảnh phải là file PNG, JPEG, JPG");
		  hinh.focus();
		  return;
		}
	}
	
	var file_data = document.getElementById("hinh").files[0];
	
	form_data.append('action','addBanner');
	form_data.append('file', file_data);
	form_data.append('lienket',lienket.value);
	form_data.append('vitri',vitri.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-banner.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Thêm banner thành công!");
					document.getElementById("banner-form").reset();
					window.location.href = "banner.php";
				}break;
			}
		}
	});
	
}

function editBanner(){
	var lienket = document.getElementById("banner-form").lienket;
	var vitri = document.getElementById("banner-form").vitri;
	var hinh = document.getElementById("banner-form").hinh;
	var id = document.getElementById("banner-form").id;
	
	var form_data = new FormData();
	
	if (lienket.value==""){
		alert("Liên kết banner không được để trống!");
		lienket.focus();
		return;
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
	
	form_data.append('action','editBanner');
	form_data.append('file', file_data);
	form_data.append('lienket',lienket.value);
	form_data.append('vitri',vitri.value);
	form_data.append('id',id.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-banner.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Lưu thông tin thành công!");
					document.getElementById("banner-form").reset();
					window.location.href = "banner.php";
				}break;
			}
		}
	});
	
}
function deleteBanner(id){
	var r = confirm("Bạn có chắc chắn muốn xóa banner này không?");
	if (r == true) {
		var form_data = new FormData();
		form_data.append('id',id);
		form_data.append('action','deleteBanner');
		
		jQuery.ajax({
			type: "POST",
			url: '../php/PHP-admin-banner.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data : form_data,
			success:function(res){
				switch(res){
					case "0":{
						alert("Xóa banner thành công!");
						if(window.location.href.includes("bannerform.php")){
							document.getElementById("banner-form").reset();
							window.location.href = "banner.php";
						} else {
							location.reload();
						}
					}break;
				}
			}
		});
	} else {}
}

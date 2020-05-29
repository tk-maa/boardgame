function uploadImage(){
	var hinh = document.getElementById("hinh");
	var masp = document.getElementById("masp");
	var form_data = new FormData();
	
	 // Read selected files
	var totalfiles = hinh.files.length;
	if(totalfiles == 0){
		alert("Hãy chọn một ảnh!");
		hinh.focus();
		return;
	} else {
		for (var i = 0; i < totalfiles; i++) {
			var fileName = hinh.files[i].name;
			var extension = fileName.split('.').pop().toLowerCase();
			if ($.inArray(extension, ['png','jpeg', 'jpg']) == -1) {
			  alert("File ảnh không hợp lệ! Ảnh phải là file PNG, JPEG, JPG");
			  hinh.focus();
			  return;
			}
			var fileSize = hinh.files[i].size / 1024 / 1024; // in MB
			if (fileSize > 2) {
				alert('Ảnh '+fileName+' vượt quá kích thước cho phép (2MB)');
				hinh.focus();
				return;
			}
			form_data.append("files[]", hinh.files[i]);
		}
	}
	form_data.append('action','uploadImage');
	form_data.append('masp',masp.value);
	
	$.ajax({
		url: '../php/PHP-admin-product.php', 
		type: 'post',
		data: form_data,
		dataType: 'text',
		contentType: false,
		processData: false,
		success: function (response) {
			var data = JSON.parse(response);
			var str ="";
			for(var i = 0; i < data.length; i++) {
				str +="<div class='picture-container'>"+
					"<img src='../img/sanpham/"+data[i].Hinh+"' style='width:250px; border: 1px solid rgba(0, 0, 0, .1)'>"+
					"<div class='bg-opacity'>"+
						"<input type='button' value='Xóa ảnh' class='btn bg-danger text-white' onclick='deleteImage("+data[i].MaHinh+")'></input>"+
					"</div>"+
				"</div>";
			}
			document.getElementById("allPictures").innerHTML = str;
			hinh.value="";
		}
		
	});	
}
function deleteImage(maHinh){
	var r = confirm("Bạn có chắc muốn xóa hình ảnh này không?");
	if( r == true) {
		var form_data = new FormData();
		var masp = document.getElementById("masp");
		form_data.append('masp',masp.value);
		form_data.append('maHinh',maHinh);
		form_data.append('action','deleteImage');
		
		jQuery.ajax({
			type: "POST",
			url: '../php/PHP-admin-product.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data : form_data,
			success: function (response) {
				var data = JSON.parse(response);
				var str ="";
				for(var i = 0; i < data.length; i++) {
					str +="<div class='picture-container'>"+
						"<img src='../img/sanpham/"+data[i].Hinh+"' style='width:250px; border: 1px solid rgba(0, 0, 0, .1)'>"+
						"<div class='bg-opacity'>"+
							"<input type='button' value='Xóa ảnh' class='btn bg-danger text-white' onclick='deleteImage("+data[i].MaHinh+")'></input>"+
						"</div>"+
					"</div>";
				}
				document.getElementById("allPictures").innerHTML = str;
			}
		});
	} else {}
}

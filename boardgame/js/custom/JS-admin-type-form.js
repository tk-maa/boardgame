function addType(){
	var tenlsp = document.getElementById("type-form").tenlsp;
	var malsp = document.getElementById("type-form").malsp;
	
	var form_data = new FormData();
	
	if (malsp.value==""){
		alert("Mã loại sản phẩm không được để trống!");
		malsp.focus();
		return;
	}

	if (tenlsp.value==""){
		alert("Tên loại sản phẩm không được để trống!");
		tenlsp.focus();
		return;
	}
	
	form_data.append('action','addType');
	form_data.append('malsp',malsp.value);
	form_data.append('tenlsp',tenlsp.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-type.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Thêm loại sản phẩm thành công!");
					document.getElementById("type-form").reset();
					window.location.href = "type.php";
				}break;
			}
		}
	});
	
}

function editType(){
	var tenlsp = document.getElementById("type-form").tenlsp;
	var malsp = document.getElementById("type-form").malsp;
	var malspCu = document.getElementById("type-form").code;
	
	var form_data = new FormData();
	
	if (malsp.value==""){
		alert("Mã loại sản phẩm không được để trống!");
		malsp.focus();
		return;
	}

	if (tenlsp.value==""){
		alert("Tên loại sản phẩm không được để trống!");
		tenlsp.focus();
		return;
	}
	
	form_data.append('action','editType');
	form_data.append('malsp',malsp.value);
	form_data.append('tenlsp',tenlsp.value);
	form_data.append('malspCu',malspCu.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-type.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Sửa loại sản phẩm thành công!");
					document.getElementById("type-form").reset();
					window.location.href = "type.php";
				}break;
			}
		}
	});
	
}
function deleteType(malsp){
	var r = confirm("Bạn có chắc chắn muốn xóa loại sản phẩm này không?");
	if (r == true) {
		var form_data = new FormData();
		form_data.append('malsp',malsp);
		form_data.append('action','deleteType');
		
		jQuery.ajax({
			type: "POST",
			url: '../php/PHP-admin-type.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data : form_data,
			success:function(res){
				switch(res){
					case "0":{
						alert("Xóa loại sản phẩm thành công!");
						if(window.location.href.includes("typeform.php")){
							document.getElementById("type-form").reset();
							window.location.href = "type.php";
						} else {
							location.reload();
						}
					}break;
				}
			}
		});
	} else {}
}
function addCategory(){
	var categoryName = document.getElementById("category-form").categoryName;
	var categoryID = document.getElementById("category-form").categoryID;
	
	var form_data = new FormData();
	
	if (categoryID.value==""){
		alert("Mã thể loại không được để trống!");
		categoryID.focus();
		return;
	}

	if (categoryName.value==""){
		alert("Tên thể loạikhông được để trống!");
		categoryName.focus();
		return;
	}
	
	form_data.append('action','addType');
	form_data.append('categoryID',categoryID.value);
	form_data.append('categoryName',categoryName.value);
	
	jQuery.ajax({
		type: "POST",
		url: '../php/PHP-admin-category.php',
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
	var typeName = document.getElementById("type-form").typeName;
	var newTypeID = document.getElementById("type-form").typeID;
	var oldTypeID = document.getElementById("type-form").code;
	
	var form_data = new FormData();
	
	if (typeID.value==""){
		alert("Mã loại sản phẩm không được để trống!");
		typeID.focus();
		return;
	}

	if (typeName.value==""){
		alert("Tên loại sản phẩm không được để trống!");
		typeName.focus();
		return;
	}
	
	form_data.append('action','editType');
	form_data.append('newTypeID',newTypeID.value);
	form_data.append('typeName',typeName.value);
	form_data.append('oldTypeID',oldTypeID.value);
	
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
function deleteType(typeID){
	var r = confirm("Bạn có chắc chắn muốn xóa loại sản phẩm này không?");
	if (r == true) {
		var form_data = new FormData();
		form_data.append('typeID',typeID);
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
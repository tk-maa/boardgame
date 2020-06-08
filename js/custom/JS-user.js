function login() {
	var email = document.getElementById("login-form").email;
	var password = document.getElementById("login-form").password;

	if (email.value==""){
		alert("Email không thể để trống");
		email.focus();
		return;
	}

	if (password.value==""){
		alert("Mật khẫu không thể để trống");
		password.focus();
		return;
	}

	var form_data = new FormData();
	form_data.append('action','login');
	form_data.append('email',email.value);
	form_data.append('password',password.value);

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-user.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					window.location.href = "index.php";
				}break;
				case "1":{
					alert("Email hoặc mật khẫu không chính xác");
				}break;
			}
		}
	});
}
function signup() {
	var name = document.getElementById("signup-form").name;
	var email = document.getElementById("signup-form").email;
	var password = document.getElementById("signup-form").password;
	var assertPassword = document.getElementById("signup-form").assertPassword;
	var rules = document.getElementById("signup-form").rules;

	if (name.value==""){
		alert("Họ và tên không được để trống");
		name.focus();
		return;
	}

	if (email.value==""){
		alert("Email không được để trống");
		email.focus();
		return;
	} else {
		if (email.value.length<5){
			alert("Email không thể qua ngắn");
			email.focus();
			return;
		} else {
			var format = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/igm;
			if(format.test(email.value)==false){
				alert("Email không hợp lệ");
				email.focus();
				return;	
			}
		}
	}

	if (password.value == ""){
		alert("Mật khẫu không thể để trống");
		password.focus();
		return;
	} else {
		if( assertPassword.value == "" ){
			alert("Xác nhận mật khẫu không thể để trống");
			assertPassword.focus();
			return;
		} else {
			if( password.value != assertPassword.value ){
				alert("Mật khẫu và xác nhận không thể khác nhau");
				return;
			}
		}
	}

	if(rules.checked == false) {
		alert("Bạn cần chấp nhận những điều khoản của chúng tôi");
		return;
	}

	var form_data = new FormData();
	form_data.append('action','signup');
	form_data.append('email',email.value);
	form_data.append('name',name.value);
	form_data.append('password',password.value);

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-user.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Đăng ký thành công");
					window.location.href = "index.php";
				}break;
				case "1":{
					alert("Email đã tồn tại");
				}break;
			}
		}
	});
}
function logout() {
	var form_data = new FormData();
	form_data.append('action','logout');

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-user.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					window.location.href = "index.php";
				}break;
			}
		}
	});
}
function saveInfo() {
	var name = document.getElementById("information-form").name;
	var phone = document.getElementById("information-form").phone;
	var address = document.getElementById("information-form").address;

	if (name.value==""){
		alert("Họ và tên không được để trống");
		name.focus();
		return;
	}

	if (phone.value==""){
		alert("Số địa thoại không được để trống");
		phone.focus();
		return;
	} else {
		var pattern = /0[1-9]\d{8}$/;
		if(pattern.test(phone.value)==false){
			alert("Số điện thoại không hợp lệ");
			phone.focus();
			return;
		}
	}

	if (address.value==""){
		alert("Địa chỉ không được để trống");
		address.focus();
		return;
	}


	var form_data = new FormData();
	form_data.append('action','saveInfo');
	form_data.append('phone',phone.value);
	form_data.append('name',name.value);
	form_data.append('address',address.value);

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-user.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Lưu thông tin thành công");
					window.location.href = "user.php";
				}break;
				case "1":{
					alert("Phiên đăng nhập đã hết hạn");
					window.location.href = "index.php";
				}break;
			}
		}
	});
}

function changePassword() {
	var oldPassword = document.getElementById("password-form").oldPassword;
	var newPassword = document.getElementById("password-form").newPassword;
	var assertNewPassword = document.getElementById("password-form").assertNewPassword;

	if (oldPassword.value == ""){
		alert("Mật khẫu cũ không được để trống");
		oldPassword.focus();
		return;
	}

	if (newPassword.value == ""){
		alert("Mật khẫu mới không được để trống");
		newPassword.focus();
		return;
	} else {
		if (assertNewPassword.value == ""){
			alert("Xác nhận mật khẫu mới không được để trống");
			assertNewPassword.focus();
			return;
		} else {
			if(newPassword.value != assertNewPassword.value){
				alert("Xác nhận mật khẫu mới không đúng");
				return;
			}
		}
	}

	var form_data = new FormData();
	form_data.append('action','changePassword');
	form_data.append('oldPassword',oldPassword.value);
	form_data.append('newPassword',newPassword.value);

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-user.php',
		dataType: 'text',
		cache: false,
		contentType: false,
		processData: false,
		data : form_data,
		success:function(res){
			switch(res){
				case "0":{
					alert("Đổi mật khẫu thành công");
					window.location.href = "user.php";
				}break;
				case "1":{
					alert("Phiên đăng nhập đã hết hạn");
					window.location.href = "index.php";
				}break;
				case "2":{
					alert("Mật khẫu cũ không chính xác");
				}break;
			}
		}
	});
}
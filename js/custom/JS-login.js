$(window).ready(function() {
	var login = document.getElementById("login-form");
    login.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("login-form").btnLogin.click();
      }
	});
	var signup = document.getElementById("signup-form");
    signup.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("signup-form").btnSignup.click();
      }
	});
});

function login() {
	var email = document.getElementById("login-form").email;
	var password = document.getElementById("login-form").password;

	if (email.value==""){
		alert("Email không thể để trống");
		email.focus();
		return;
	}

	if (password.value==""){
		alert("Mật khẩu không thể để trống");
		password.focus();
		return;
	}

	var form_data = new FormData();
	form_data.append('action','login');
	form_data.append('email',email.value);
	form_data.append('password',password.value);

	jQuery.ajax({
		type: "POST",
		url: './php/PHP-login.php',
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
					alert("Email hoặc mật khẩu không chính xác");
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
		alert("Mật khẩu không thể để trống");
		password.focus();
		return;
	} else {
		if( assertPassword.value == "" ){
			alert("Xác nhận mật khẩu không thể để trống");
			assertPassword.focus();
			return;
		} else {
			if( password.value != assertPassword.value ){
				alert("Mật khẩu và xác nhận không thể khác nhau");
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
		url: './php/PHP-login.php',
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
		url: './php/PHP-login.php',
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
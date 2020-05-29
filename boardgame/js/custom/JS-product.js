function formatPricetoPrint(a){
	a=a.toLocaleString();
	a=a.split(',').join('.');
	return a;
}

function paginationGetData(numOfItems,currentPage){
	var sortBrand = document.getElementById('sortBrand').value;
	var sortBasic = document.getElementById('sortBasic').value;
	var sortType = document.getElementById('sortType').value;

	let form_data = new FormData();
	form_data.append('action','paginationGetData');
    form_data.append('sortBrand',sortBrand);
	form_data.append('sortBasic',sortBasic);
	form_data.append('sortType',sortType);
	form_data.append('numOfItems',parseInt(numOfItems));
	form_data.append('currentPage',parseInt(currentPage));

	paginationGetPages(numOfItems,currentPage);

	$.ajax({
		url: './php/PHP-product.php', 
		type: 'post',
		data: form_data,
		dataType: 'text',
		contentType: false,
		processData: false,
		success: function (response) {
			var getData = JSON.parse(response);
			var string = "";
			for( var i = 0; i < getData.length; i++){
				string +=`<div class="col-md-3 mb-5">`+
					`<div class="item">`+
						`<div class="product-box common-cart-box">`+
							`<div class="product-img common-cart-img">`+
								`<img src="./img/sanpham/${getData[i].Hinh}" alt="product-img" class="img-product" >`+
								`<div class="hover-option">`+
									`<ul class="hover-icon">`+
										`<li><a href="#" onclick='addToCart(${parseInt(getData[i].MaSP)})'><i class="fa fa-shopping-cart"></i></a></li>`+
										`<li><a href="#test-popup3" class="quickview-popup-link" onclick='quickView(${parseInt(getData[i].MaSP)})'><i class="fa fa-eye"></i></a></li>`+
									`</ul>`+
								`</div>`+
							`</div>`+
							`<div class="product-info common-cart-info" style="text-align: center;">`+
								`<a href="product-detail.php?id=${parseInt(getData[i].MaSP)}" class="cart-name">${getData[i].TenSP}</a>`+
								`<div class="product-rate">`+
									`<i class="ion-android-star"></i>`+
									`<i class="ion-android-star"></i>`+
									`<i class="ion-android-star"></i>`+
									`<i class="ion-android-star"></i>`+
									`<i class="ion-android-star-half"></i>`+
								`</div>`+
								`<p class="cart-price">${formatPricetoPrint(parseInt(getData[i].GiaTien))}₫</p>`+
							`</div>`+
						`</div>`+
					`</div>`+
				`</div>`;
			}
			document.getElementById("product-container").innerHTML=string;
		}
	});	
}

function paginationGetPages(numOfItems,currentPage){
	var sortBrand = document.getElementById('sortBrand').value;
	var sortBasic = document.getElementById('sortBasic').value;
	var sortType = document.getElementById('sortType').value;

	let form_data = new FormData();
	form_data.append('action','paginationGetPages');
    form_data.append('sortBrand',sortBrand);
	form_data.append('sortBasic',sortBasic);
	form_data.append('sortType',sortType);

	$.ajax({
		url: './php/PHP-product.php', 
		type: 'post',
		data: form_data,
		dataType: 'text',
		contentType: false,
		processData: false,
		success: function (response) {
			var numOfPage = Math.ceil(response/numOfItems);
			if(numOfPage > 1){
				var string = "<ul class='pagination'><li>";
				if(currentPage != 1 ){
					string +=`<a href="#" onclick='paginationGetData(${numOfItems},1)' title="Trang đầu">&lt;&lt;</a>`;
					string +=`<a href="#" onclick='paginationGetData(${numOfItems},${currentPage-1})' title="Trang trước">&lt;</a>`;
				}		
				for( var i = 1; i <= numOfPage; i++){
					if( i == currentPage ){
						string += `<a href="#" class='pagination-active'>${i}</a>`;
					} else {
						string += `<a href="#" onclick='paginationGetData(${numOfItems},${i})'>${i}</a>`;
					}
				}
				if(currentPage != numOfPage){
					string +=`<a href="#" onclick='paginationGetData(${numOfItems},${currentPage+1})' title="Trang sau">&gt;</a>`;
					string +=`<a href="#" onclick='paginationGetData(${numOfItems},${numOfPage})' title="Trang cuối">&gt;&gt;</a>`;
				}
				string +="</li></ul>";
				document.getElementById("pagination-section").innerHTML=string;
			}
			
		}
	});	
}

var slideIndex = 1;
showDivs(slideIndex);
						
function plusDivs(n) {
	showDivs(slideIndex += n);
}
						
function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
}

function FormKontrol(){
	var ad=document.forms["iletisim"]["adi"].value;
	var email=document.forms["iletisim"]["posta"].value;
	var mesaj=document.forms["iletisim"]["mesaj"].value;
	if(ad==""){
		alert("Ad boş olamaz");
		return false;
	}
	if(email==""){
		alert("Email boş olamaz");
		return false;
	}
	if(mesaj==""){
		alert("Mesaj boş olamaz");
		return false;
	}
}

function FormKontrol2(){
	var email=document.forms["giris"]["email"].value;
	var sifre=document.forms["giris"]["sifre"].value;
	if(email==""){
		alert("Kullanıcı Adı boş olamaz");
		return false;
	}
	if(sifre==""){
		alert("Şifre boş olamaz");
		return false;
	}
}


tinymce.init({
	selector: '#editortesto',
	plugins: 'autolink autosave charmap emoticons hr link lists advlist paste table searchreplace wordcount',
	paste_data_images: false,
	setup:function(ed) {
       ed.on('change', function() {
           $("#descrizioneItem").html( ed.getContent());
       });
   }
});

function closeNav() {
	var menubar=document.getElementById("menuDropBar");
	menubar.style.width = "0%"
	menubar.className ="menuDrop";
	if(window.innerWidth>800){
		document.getElementById("main").style.marginLeft = "0%";
	}
}

function openNav() {
	var menubar=document.getElementById("menuDropBar");
	menubar.style.width = "50%"
	menubar.className ="menuDrop border";
	if(window.innerWidth>1000){
	document.getElementById("main").style.marginLeft = "50%";
	}
}

function redirect(dove) {
	window.location.href = dove;
}

function menuMobile2() {
	var bar = document.getElementById("menuDropBar2");
	bar.style.display = "block";
}
function closeMenuMobile2(){
	var bar = document.getElementById("menuDropBar2");
	bar.style.display = "none";
}

function addShop(id,quantitymax) {
	var quantity=document.getElementById("quantity"+id).value
	var page=document.getElementById("page").value
	if(quantity<=quantitymax){
		window.location.href ="addCart?itemID="+id+"&numItems="+quantity+"&page="+page;
	}else{
		document.getElementById("errorQ").style.display="block";
		document.getElementById("acquista").style.display="none";
	}
}


function showPassword(inpsw,none,inline){
	var bar = document.getElementById(inpsw);
	bar.setAttribute("type","text");
	var icon1 = document.getElementById(inline);
	var icon2 = document.getElementById(none);
	icon1.style.display="inline";
	icon2.style.display="none";
}

function hidePassword(inpsw,none,inline){
	var bar = document.getElementById(inpsw);
	bar.setAttribute("type","password");
	document.getElementById(none).style.display="none";
	document.getElementById(inline).style.display="inline";
}

var slideIndex;
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("slide");
  	var dots = document.getElementsByClassName("dot");
  	if (n > slides.length) {slideIndex = 1}
  	if (n < 1) {slideIndex = slides.length}
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
  	}
  	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
 	}
	var x=slideIndex-1;
  	slides[x].style.display = "block";
  	dots[x].className += " active";
}

function startShowSlides() {
	var slides = document.getElementsByClassName("slide");
  	var dots = document.getElementsByClassName("dot");
	slides[0].style.display = "block";
  	dots[0].className += " active";
	slideIndex=1;
}

function validateNomeCognome(input){
	var name = /^[A-Za-z]+$/;
	if(input.match(name)){
		return true
	}
	return false
}

function validateEmail(input){
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(input.match(email)){
		return true
	}
	return false
}

function validateNumeroTelefono(input){
	var tel = /^\d{10,15}$/;
	if(input.match(tel)){
		return true
	}
	return false
}

function validatePassword(input){
	var pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,32}$/;
	if(input.match(pass)){
		return true;
	}
	return false;
}

function validateConfermaPassword(password,conferma){
	if(password===conferma){
		return true;
	}
	return false;
}

function validateSignIn(form){
	var valid=true;
	
	var nome = $("#nomeInput").val();
	if(!validateNomeCognome(nome)){
		valid=false;
		 $("#nomeInput").before("Il nome non deve contenere numeri o simboli speciali <br>");
	}
	
	
	var cognome = $("#cognomeInput").val();
	if(!validateNomeCognome(cognome)){
		valid=false;
		$("#cognomeInput").before("Il cognome non deve contenere numeri o simboli speciali <br>");
	}
	
	var email = $("#emailInput").val();
	if(!validateEmail(email)){
		valid=false;
		$("#emailInput").before("Inserire una mail valida <br>");
	}

	
	var numero = $("#telefonoInput").val();
	if(!validateNumeroTelefono(numero)){
		valid=false;
		$("#telefonoInput").before("Inserire un numero di telefono valido <br>");
	}
	
	var password = $("#passwordInput").val();
	if(!validatePassword(password)){
		valid=false;
		$("#passwordInput").before("La password non rispetta i parametri necessari <br>");
	}
	
	var confermaPassword = $("#confermaPasswordInput").val();
	if(!validateConfermaPassword(password,confermaPassword)){
		valid=false;
		$("#confermaPasswordInput").before(" Le Password non combaciano <br>");
	}
	
	if(valid){
		form.submit();
	}
}

function tagAutoComplite(lista){
	$('#tag').tagsinput({
		typeaheadjs: {
			name: 'tag',
			source: substringMatcher(lista)
		}
	});
}

var substringMatcher = function(strs) {
	return function findMatches(q, cb) {
		var matches, substrRegex;
		matches = [];
		substrRegex = new RegExp(q, 'i');
		$.each(strs, function(i, str) {
			if (substrRegex.test(str)) {
				matches.push(str);
			}
		});
		cb(matches);
	};
};

function InstagramImg(element){
	var token= "ea60d9c604a23e0ae8550e0d02a4607e";
	var username= "casadeifiori.ideecreazioni";
	var numfoto= 6;
	$.ajax({
		url:"https://api.instagram.com/v1/users/search",
		dataType: "jsonp",
		type: "GET",
		data: {access_token: token, q:username},
		success: function(data){
			$.ajax({
				url:"https://api.instagram.com/v1/users/"+ data.data[0].id+ "/media/recent",
				dataType: "jsonp",
				type: "GET",
				data: {access_token: token, count: numfoto},
				success: function(data2){
					for(x in data2.data){
						$("#InstagramImg").append("<li><img src= '"+ data2.data[x].images.thumbnail.url + "'></li>");
					}
				}
			})
		}
	})
}

function prewiev(input,output){
	$("#"+output).text($("#"+input).val())
}

function prewievTag(input,output){
	$("#"+output).text($("#"+input).val().replace(/,/g," "))
}

function prewievPrezzo(output){
	var prezzo=Number($("#price").val());
	prezzo=prezzo+(prezzo*Number($("#iva").val()))/100;
	prezzo=prezzo-(prezzo*Number($("#sconto").val()))/100
	$("#"+output).html(prezzo.toFixed(2)+" &euro;");
}

function initFileSelect(){
	var selDiv=$("#selectedFiles")
	$("#img").change(function(e){
		if(!e.target.files) return;
		var files = e.target.files;
		var filesArr = Array.prototype.slice.call(files);
		filesArr.forEach(function(f) {
			if(!f.type.match("image.*")) {
				return;
			}
			selDiv.append(f.name + "<br/>");
			var reader = new FileReader();
			reader.onload = function (e) {
				var html = "<img src=\"" + e.target.result + "\">";
				$("#galleriaItem").append(html);		
			}
			reader.readAsDataURL(f);
		});
	});
}
function openLogIn(){
	document.getElementById('divLogIn').style.display='block'
}

function closeLogIn(){
	document.getElementById('divLogIn').style.display='none';
}

function closeLogInOutside(){
	// Get the modal
	var modal = document.getElementById('divLogIn');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
 	 	if (event.target == modal) {
   	 		modal.style.display = "none";
  		}
	}
	
}

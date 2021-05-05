var sexE = document.getElementById("sex");
var weightE = document.getElementById("weight");
var wuE = document.getElementById("wu");
var h1E = document.getElementById("height1");
var h2E = document.getElementById("height2");
var huE = document.getElementById("hu");
var ageE = document.getElementById("age");
var bmrE = document.getElementById("bmr");
function updateHeight(){
	if (huE.value == '0')
		h2E.style.visibility = "visible";
	else h2E.style.visibility = "collapse";
}
function calcBMR(){
	var w = parseFloat(weightE.value);
	if (wuE.value == '0'){
		w = parseFloat(weightE.value)/2.20462;
	}
	var h = parseFloat(h1E.value);
	if (huE.value == '0'){
		h = (parseFloat(h1E.value)*12 + parseFloat(h2E.value))*2.54;
	}
	var a = parseInt(ageE.value);
	console.log(w);
	console.log(h);
	console.log(a);
	bmr = 88.362 + (13.397*w) + (4.799*h) - (5.677*a);
	if (sexE.value == '1'){
		bmr = 447.593 + (9.247* w) + (3.098*h) - (4.330*a);
	}
	bmrE.innerHTML = parseInt(bmr);
}
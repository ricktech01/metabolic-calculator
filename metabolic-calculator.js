var sexE = document.getElementById("sex");
var weightE = document.getElementById("weight");
var wuE = document.getElementById("wu");
var h1E = document.getElementById("height1");
var h2E = document.getElementById("height2");
var huE = document.getElementById("hu");
var ageE = document.getElementById("age");
var bmrE = document.getElementById("bmr");

var gwE = document.getElementById("goalWeight");
var gwuE = document.getElementById("gwu");
var sdE = document.getElementById("startDate");
var edE = document.getElementById("endDate");
var crE = document.getElementById("calculatedRate");


var calsE = document.getElementById("cals");
var bmr = 0;

function updateHeight(){
	if (huE.value == '0')
		h2E.style.visibility = "visible";
	else h2E.style.visibility = "collapse";
}
function calcBMR(){
	var w = parseFloat(weightE.value);
	if (wuE.value == '0')
		w = parseFloat(weightE.value)/2.20462;
	var h = parseFloat(h1E.value);
	if (huE.value == '0')
		h = (parseFloat(h1E.value)*12 + parseFloat(h2E.value))*2.54;
	var a = parseInt(ageE.value);
	
	bmr = 88.362 + (13.397*w) + (4.799*h) - (5.677*a);
	if (sexE.value == '1'){
		bmr = 447.593 + (9.247* w) + (3.098*h) - (4.330*a);
	}
	if (isNaN(bmr))
		alert("Please fill all required fields!")
	else bmrE.innerHTML = parseInt(bmr) + " Calories/Day";
}
function calcByGoal(){
	calcBMR();
	var gw = parseFloat(gwE.value);
	if (gwuE.value == '1')
		gw = parseFloat(gwE.value)*2.20462;
	var sd = new Date(sdE.value);
	var ed = new Date(edE.value);
	var dt = (ed - sd)/604800000 ;

	var w = parseFloat(weightE.value);
	if (wuE.value == '1')
		w = parseFloat(weightE.value)*2.20462;
	
	var dw = gw - w;
	var cr = dw/dt;

	crE.innerHTML = cr.toFixed(2) + " lbs/week";
	if (gw.value == '1')
		crE.innerHTML = (cr / (2.20462)) + "kg/week";

	var cals = (bmr + cr*500).toFixed(2);
	if (isNaN(cals))
		alert("Please fill all required fields!"); 
	else {
	if (cals < 0)
		alert("Your goal means you need to consume less than zero net calories per day.")
	calsE.innerHTML = cals + " calories per day";
	}

}
function calcByRate(){

}
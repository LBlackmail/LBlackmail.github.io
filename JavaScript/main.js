
/* AUTO-SIZING SLIDESHOW BY @THEMAMAJAAY */
/* Credits to Bombmom & Dacal */

var filename = "";
var where = "";
var whereOld = "";
var ampm = false; 
var widgetTimer;
var updateTimer = "";
var PicNumber = 103;
var PicExt = "png";

function updateClock(){
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var TimeSinceLastUpdate = (currentTime.getTime() - updateTimer)/1000/60;
var TimeBeforeNextUpdate = Math.ceil((1-((TimeSinceLastUpdate/updateInterval)- Math.floor(TimeSinceLastUpdate/updateInterval)))* updateInterval);
time_to_change_wall = currentHours + currentMinutes/60;
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";
	
if (ampm == false) {
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
	} else {
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
	updateTimer = currentTime.getTime();
	}

function init() {

/* INITIALIZE SCREEN DATA */

/*INITIALIZE SLIDESHOW*/

	if (SlideSpeed == 0) {
	    WPfade_in = document.getElementById("widgetImage");
		widgetStop();	} 
    else {
		WPfade_in = document.getElementById("widgetImage");
		WPfade_out = document.getElementById("widgetImage2");
		widgetStart();
		}

/* UPDATE CLOCK */
updateClock();
setInterval(updateClock, 1000);
}

function widgetStart() {
	var number = randomInteger(1, PicNumber+1);
	WPfade_in.src = "Images/SlideShow/" + number + "." + PicExt;
	var WPfade_tmp = WPfade_in;
	WPfade_in = WPfade_out;
	WPfade_out = WPfade_tmp;
	WPfade_in.className='fade-out-wall';
	WPfade_out.className='fade-in-wall';
	widgetTimer = setTimeout(widgetStart, SlideSpeed*1000);
}

function widgetStop() {
clearTimeout(widgetTimer);
SlideSpeed == 0;
	WPfade_in.src = "Images/static.jpg"; 
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function delelement(elem) {
var element = document.getElementById(elem);
while (element.firstChild) { element.removeChild(element.firstChild); }
}

function loadjscssfile(url, filename, filetype){
if (filetype=="js") {
	var fileref = document.createElement("script");
	fileref.type = "text/javascript";
	fileref.charset = "utf-8";
	fileref.src = "JavaScript/" + url + "/" + filename + ".js";
 }
if (filetype=="css") {
	var fileref = document.createElement("link");
	fileref.rel = "stylesheet";
	fileref.href = "Css/" + url + "/" + filename + ".css";
	fileref.type = "text/css";
	fileref.media = "screen";
 }
document.getElementsByTagName("head")[0].appendChild(fileref);
}



var video = document.querySelector("#aaronvid");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 let muted = 1;

 document.querySelector("#mute").addEventListener("click", function() {
	muted += 1;
	if (muted % 2 == 0){
	document.querySelector("#mute").innerHTML = "Unmute";
	video.muted = true;
	}
	else{ 
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
 });

 document.querySelector("#restart").addEventListener("click", function() {
	console.log("Restart Video");
	video.currentTime = 0;
 });
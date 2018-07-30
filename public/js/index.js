var clicks = 0;

var image = document.querySelector("#cake-image");
var cakeButton = document.querySelector("#cake-button");
var headerText = document.querySelector("#subheader-text");

function onClick() {
	clicks++;
	if (clicks === 1) {
		image.src = "./images/rachel.png";
		headerText.innerHTML = "My birthday wish is..";
	}
	else {
		window.location = "messages.html";
	}
}

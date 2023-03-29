let scrollPosition = 0;
let smoothedScrollPosition = 0;
let rawScrollPosition = 0;

const body = document.querySelector("body");

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
};

window.requestAnimationFrame(trackScroll);

function trackScroll(timestamp) {
	rawScrollPosition = window.scrollY;
	scrollPosition = window.scrollY / (body.clientHeight - window.innerHeight);

	smoothedScrollPosition =
		smoothedScrollPosition - (smoothedScrollPosition - scrollPosition) * 0.2;

	window.requestAnimationFrame(trackScroll);
}

function createScrollableLength(height) {
	if (typeof height == "Number") {
		height += "px";
	}

	document.querySelector("span").style.minHeight = height;
}

document.addEventListener("keydown", (ev) => {
	if (ev.keyCode == 69) { // E
		window.location.href = '/examples/index.html';
	}
})

console.log(`
############################################

Just so you know, you can press "E" to go see the examples.
Also, bless you for having the console open ❤️

############################################
`)
// this is the only case you should be using rawScrollPosition
// I know, the raw version goes from 0 pixels to "how many pixels your scrollable area is" and it's easier to understand when you are getting started.
// But, using scrollPosition and smoothedScrollPosition will ensure that your project remains easy to update.

function setup() {
	createCanvas(windowWidth, windowHeight);
	createScrollableLength("1000vh"); //any number or "css size" like "300vh" or "10rem"
}

function draw() {
	background(0);

	// positioned given a set distance in pixels from the start of the page
	let originInPx = 900;
	fill("yellow");
	circle(width / 5, originInPx - rawScrollPosition, 100);

	// positioned given a set distance in "screen height" precentages from the start of the page
	let originInVh = height * 1.5; // a screen and a half, height-wise 
	fill("red");
	circle(width / 1.5, originInVh - rawScrollPosition, 100);
}

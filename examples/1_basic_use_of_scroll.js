function setup() {
	// windowWidth and windowHeight are provided by P5.
	createCanvas(windowWidth, windowHeight);

	// this is provided by scrollies, it takes any number or "css size" like "300vh" or "10rem".
	// this will setup how long your page is to scroll.
	createScrollableLength("300vh");
}

function draw() {
	// giving one value is a shortcut to spacify a color with as much Red, Green, and Blue
	// 0 everywhere means black
	background(0);

	// fill() will let you set the color of your shapes
	// using the position of the scroll to calculate a color will make the color reactive to the scrolling
	fill(200, 60, 0, 255 * smoothedScrollPosition);

	// the function circle() first take the X position of its center, then the Y and then the diameter of the circle you want.
	// if we give half of the width of the drawing space
	// then half of the height of the drawing space 
	// and finaly the width of the canvas multiplied by the scollPosition (going from 0 to 1)
	// then we get a circle at the center of the canvas going fro 0 in diameter to the width of the canvas.
	circle(width / 2, height / 2, width * smoothedScrollPosition);
}

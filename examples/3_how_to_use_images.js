let forest;
let character;

// first we have to load them during the special funciton "preload"
// which happens before "setup"
// that way, we are guarenteed that the images will be ready for "setup" and "draw"
function preload() {
	forest = loadImage("assets/forest.avif");
	character = loadImage("assets/tux.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	createScrollableLength("15000px"); //any number or "css size" like "300vh" or "10rem"

	// This line will allow us to specify where to put the images by giving the position of its center point.
	// Without this, you'd have to place the images by specifying the coordinates of the upper-left corner
	imageMode(CENTER);
}

function draw() {
	background(0);

	// just like the previous examples with the chapters we do these instruction so long as the scroll is between 0 and 0.33
	if (scrollPosition < 0.33) {
		const transparencyLevel = map(smoothedScrollPosition, 0, 0.33, 0, 255);
		// the transparency of the images we draw is not related to how far we've come in the chapter
		tint(255, transparencyLevel);
		// draw the image contained in the "forest" variable, it's center is going to be in the middle of the screen
		image(forest, width / 2, height / 2);
	}

	//the next two chapters are moving an image on top of the forest using the same concepts as the first chapter and the previous example

	if (scrollPosition > 0.33 && scrollPosition <= 0.66) {
		const characterX = map(scrollPosition, 0.33, 0.66, width, -150);
		image(forest, width / 2, height / 2);
		image(character, characterX, height / 2);
	}

	if (scrollPosition > 0.66) {
		const characterY = map(scrollPosition, 0.66, 1, 0, height + 150);
		image(forest, width / 2, height / 2);
		image(character, width / 2, characterY);
	}
}

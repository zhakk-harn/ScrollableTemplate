// It may not be a good idea to read this
// It's just an example I made to test the functions and variables I'm giving you

const SQUARE_SIZE = 20;

let squares = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	createScrollableLength("1000vh"); //any number or "css size" like "300vh" or "10rem"
	noStroke();

	for (let i = 0; i < width / SQUARE_SIZE; i++) {
		for (let j = 0; j < height / SQUARE_SIZE; j++) {
			squares.push({
				hue: Math.floor(random(360)),
				x: i * SQUARE_SIZE,
				y: j * SQUARE_SIZE,
			});
		}
	}

	squares.sort((s1, s2) => s1.hue > s2.hue);

	squares.forEach((e, i) => {
		e.destX = (i % (width / SQUARE_SIZE)) * SQUARE_SIZE;
		e.destY = Math.floor(i / (width / SQUARE_SIZE)) * SQUARE_SIZE;
	});
}

function draw() {
	background(0);
	squares.forEach((s) => {
		fill(`hsb(${s.hue},80%,100%)`);
		const x =
			s.x * (1 - smoothedScrollPosition) + s.destX * smoothedScrollPosition;
		const y =
			s.y * (1 - smoothedScrollPosition) + s.destY * smoothedScrollPosition;

		rect(x, y, SQUARE_SIZE, SQUARE_SIZE);
	});
}

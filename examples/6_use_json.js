// a ".json" file is a file which can contain a (usually big) object containing a lot of data. It's practical because it makes data reusable, transportable and shareable.
// also, you can export an excel file into a .csv and automatically convert that .csv into a .json

let dataset;


// I'm really sorry, some keywords are out of the scope of this course.
// It would be a pleasure to explain all that but for what we are doing you only need to know that you can copy paste these lines and change the address on line 11 to your own .json. and the destination variable on line 12.
// and after all this is executed you will have your .json loaded in your variable.
async function preload() {
	const networkResponse = await fetch("/examples/assets/example.json");
	dataset = await networkResponse.json();
	console.log(dataset);
}

function setup() {
	// windowWidth and windowHeight are provided by P5.
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	text("press F12", width / 2, height / 2);
}

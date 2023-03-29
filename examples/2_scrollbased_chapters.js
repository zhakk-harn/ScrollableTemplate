function setup() {
	createCanvas(windowWidth, windowHeight);
	createScrollableLength("15000px"); //any number or "css size" like "300vh" or "10rem"
}

function draw() {
	background(0);

	// if the scroll is between the start and a third of the way
	if (scrollPosition < 0.33) {
		// get the progress of the chapter by remaping the scroll position from 0 -> 0.33 to 0 -> 1
		// the "if" guarantees that the scroll position will only be between 0 and 0.33
		// we are just proportionnaly now saying that we want "chapter1Progress" to be 1 when the scroll is at 0.33
		const chapter1Progress = map(smoothedScrollPosition, 0, 0.33, 0, 1);
		fill(200, 60, 80);

		// so now, we use the value of "chapter1Progress" to represent the progress of the chapter
		// just like we did with the scroll position in the previous examples
		circle(width / 2, height / 2, width * chapter1Progress);
	}

	// the "&&" let's us check multiple conditions
	// so we'll go into this bloc only if the scroll position is above 0.33 AND below 0.66
	// so if the scroll is between a third and two third of the maximum scroll
	if (scrollPosition > 0.33 && scrollPosition <= 0.66) {
		// now, given the conditions in the "if" we know that the scroll is going to be between 0.33 and 0.66
		// so we just remap scrollPosition from the range 0.33=>0.66 to the range 0 -> 1
		const chapter2Progress = map(scrollPosition, 0.33, 0.66, 1, 0);
		fill(200, 60, 80);

		// this time we use chapter2Progress which is apropriate
		circle(width / 2, height / 2, width * chapter2Progress);
	}

	// and for the final chapter we just have to perform it when the scroll position is above two thirds of the maximum scroll
	if (scrollPosition > 0.66) {
		// we can also remap the scroll position from the expected range to a range that is directly useful
		// this time we make a variable called "separation" which is going to go from 0 to width.
		const separation = map(scrollPosition, 0.66, 1, 0, width);
		fill(200, 60, 80, 150);
		circle(width / 2 + separation, height / 2, width / 4);
		fill(55, 195, 175, 150);
		circle(width / 2 - separation, height / 2, width / 4);
	}
}

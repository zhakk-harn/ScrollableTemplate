// When you have large collection of data, it makes sense to use what's called "arrays" and "object".
// Variables can hold only one thing, but an array or an object is "one thing that can hold many".
// Let's see one of each.


// this is an object. An object has many properties, each property has a name and a value.
// to access the value of a property you have to use ".". 
// Like myObject.myProp retrieves the value of "myProp" which is inside "myObject"
// But properties can contain objects!
// So you can keep going down with ".", just like you can keep going into folders with "/" like in "myDocuments/2022/photos" is the folder "photos" inside of the folder "2022" which is inside the folder "myDocuments" you can write "myDataObject.someDataPoint.x" to get the value 20 out of the object below.
// But I wouldn't write that becasue I want the value 20, I'd write that because I'm interested on the x value of that data point.
const myDataObject = {
	"someDataPoint": {
		x: 20,
		y: 200,
		isAPerson: true
	},
	"someOtherDataPoint": {
		x: 0,
		y: 0,
		isAPerson: false
	}
}

// an array can also a thing that can store multiple things but to get a value I need to specify an address.
// myDataArray[0] is the first element of my array (yes, addresses starts at 0, not 1)
// but myDataArray contains objects so myDataArray[0] is an object and to get the x value of my object I need to use "."
// so myDataArray[0].x is how I would get the x value of the first element in myDataArray
const myDataArray = [
	{
		x: 40,
		y: 400,
	},
	{
		x: 150,
		y: 150,
	}
]

function setup() {
	createCanvas(windowWidth, windowHeight);
	createScrollableLength("1000vh"); //any number or "css size" like "300vh" or "10rem"
	noStroke();
}

function draw() {
	background(0);

	// but there is an easy way to do something for every element of a collection (arrays and objects are both collections)

	// the inside of this bloc of code will run as many time as you have elements in myDataObject
	// the first time this bloc is executed the variable "element" will contain the first element of "myDataObject", the second time it will contain the second element, the third time it will contain the third element, the fourth time..........
	Object.values(myDataObject).forEach(element => {
		// so I'm saying here that if the property "isAPerson" from the current element is true then the fill is red, but if it's not then it's white
		if (element.isAPerson) {
			fill(200, 0, 0);
		} else {
			fill(255, 255, 255);
		}

		// then we draw a rectangle using the x and y property of the element
		rect(element.x, element.y, 50, 50);
	})

	// exactly the same here with the array, but note that the instruction enclosing the bloc is different for an array than for an object. But it works the same, the inside of the bloc is gonna be executed for each element of the array where "element" will contain the current element for the N-th loop
	myDataArray.forEach(element => {
		circle(element.x, element.y, 50);
	})
}

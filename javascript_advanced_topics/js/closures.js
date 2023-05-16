function outer() {
	let x = 1;
	console.log("outer x is " + x);
	function inner() {
		// store with a closure on memory to use x value later
		x += 1;
		console.log("inner x is " + x);
	}
	return inner;
}

const incrementX = outer(); // x = 1
incrementX(); // x = 2
incrementX(); // x = 3
incrementX(); // x = 4
// Function params interaction
function add(x, y = 1, z = 2) {
	console.log(arguments.length);
	console.log(x + y + z);
}

add(10); // 1 - 13
add(10, 20); // 2 - 32
add(10, 20, 30); // 3 - 60

// args - REST Params
function fn(a, b, ...args) {
	let sum1 = a + b;
	let sum2 = 0;
	for (const arg of args) {
		sum2 += arg;
	}
	console.log(sum1 + " " + sum2);
}

fn(1, 2, 10, 20);

// ARGS - karışık parametreler içinden numaraları filter ile filtreleyip, reduce ile dönerek toplamak
function sum(...args) {
	return args
		.filter(function (e) {
			return typeof e === "number";
		})
		.reduce(function (prev, curr) {
			return prev + curr;
		});
}

let result = sum(10, "Hi", null, undefined, 20);
console.log(result); // 30

// Arguments - Normal çeşitli paramentler içinden filter ile seçip reduce ile toplamak
function sumUp() {
	return Array.prototype.filter
		.call(arguments, function (e) {
			return typeof e === "number";
		})
		.reduce(function (prev, curr) {
			return prev + curr;
		});
}
// Args ile array içerisindeki elementaları birleştirmek (reduce tüm elemanlar içinde dönüyor parametre olarak fonksiyon alıyor)
const combine = (...args) => {
	return args.reduce(function (prev, curr) {
		return prev + " " + curr;
	});
};

let message = combine("JavaScript", "Rest", "Parameters", "is", "Awesome"); // =>
console.log(message); // JavaScript Rest Parameters

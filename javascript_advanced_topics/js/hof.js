// function declaration (global - her yerde kullanılabilir)
function sayHi(message) {
	return "Said..." + message;
}
console.log(sayHi("Hi"));

// function expression (scope-  sadece altındakiler kullanabilir)
// aynı zamanda anon böylece isimle uğraşmazsın
const sayHello = function(message) {
	return "Said..." + message;
}
console.log(sayHello("Hello"));

// function callback arguments (içinde function çağıran functionlar)
function funWrapper(callback) {
	return callback("Called by wrapper");
}
console.log(funWrapper(sayHi));

// veya kısa yolu anon arrow functionlar
funWrapper(m => console.log(m)); // called by wrapper
funWrapper(a => console.log(sayHello(a))); // Said..called by wrapper



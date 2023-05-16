// undefined object, variable falan kullanırken exception fırlatıyor bunu çözmek için if ile kontrol ediyorduk eskiden ama  daha kolayı var
const obj = undefined;
console.log(obj?.hello());  // undefined

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr?.[10]); // undefined

function foo(a, b) {
}

console.log(foo?.(1, 2)); // undefined
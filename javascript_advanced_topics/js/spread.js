// combining two objects together

const obj1 = {
	first: 'a',
	second: 'b',
	third: 'c',
}

const obj2 = {
	third: 'd',
	fourth: 'e',
	fifth: 'f',
}

// object assign method (aynı şey varsa son objenin key value'su ile değiştir)

const fullObj = Object.assign(obj1, obj2); // first: a, second:b, third: d, fourth: e, fifth: f
console.log(fullObj);

// spread operator ile birleştirme
const fullObj2 = {
	...obj1,
	...obj2,
}

// veya içine de yazabilirsin direkt (yine sondaki replacede öncelikli)
const obj3 = {
	...obj1,
	third: 'd',
	fourth: 'e',
	fifth: 'f',
}

const obj4 = {
	third: 'd',
	fourth: 'e',
	fifth: 'f',
	...obj1,
}


console.log(obj3); // {first: 'a', second: 'b', third: 'd', fourth: 'e', fifth: 'f'}
console.log(obj4); // {first: 'a', second: 'b', third: 'c', fourth: 'e', fifth: 'f'}
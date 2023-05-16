// destructuring object, array etc.

// OBJECT
// Bir objeyi nasıl parçalara ayıralım ki kullanabilelim farklı şekillerde
const dog = {
	name: 'fido',
	age: 4,
	bark() {
		console.log('woof');
	}
}

// dot notation
const name2 = dog.name;
const age2 = dog.age;

// dot notation uzun geliyorsa aşağıdaki şekilde hızlıca yazabilirsin
// bu şekilde yapacaksan keylerle isimleri aynı olmalı yoksa aşağıdakini yap
const {name, age} = dog;

// dilersen keylerin isimlerini de değiştirebilirsin
const {name: dogName, age: dogAge} = dog;

console.log(name);  // fido
console.log(name2); // fido
console.log(dogName); // fido

// ARRAY
const arr = ['foo', 'bar', 'baz'];

// aynı mantık, birebir aynı olsun, sıralaması aynı olacak dikat
const [a, b, c] = arr; // a = foo, b = bar, c = baz

// eleman ayrıştırmak istemiyorsan boş bırak
const [,,d] = arr; // baz

// veya klasik yöntem
const f = arr[2]; // baz

console.log(a); // foo
console.log(b); // bar
console.log(d); // baz
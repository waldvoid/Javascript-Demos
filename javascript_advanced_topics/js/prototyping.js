// object 1
const animal = {
	dna: 123,
	legs: {
		front: 2, back: 2
	},
	sleep() {
		console.log('zzzzzzzz');
	},
};

// object 2
const dog = {
	bark() {
		console.log('woof');
	}
}

console.log(animal.legs.back);
animal.sleep();

// variable oluşturalım ve direkt olarak animal'ın obje özelliklerini alalım
const p1 = Object.getPrototypeOf(animal);
console.log(p1);

// dog'un obje özellikleri dursun, animal'ın özelliklerini parent class gibi ekleyelim
Object.setPrototypeOf(dog, animal);


console.log(dog.dna);
dog.bark();


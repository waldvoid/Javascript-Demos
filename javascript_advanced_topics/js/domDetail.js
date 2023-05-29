
// Tekil olarak gezinme
console.log(document.getElementById("title").id);
console.log(document.getElementById("title").className);
console.log(document.getElementById("title").classList);
document.getElementById("title").style.color = "red"
document.getElementById("title").innerHTML = "<span>Hello</span>"
document.getElementById("title").innerText = "Goodbye"

document.querySelector(".card-header").style.backgroundColor = "lightgrey"
document.querySelector('.card-header').innerHTML += "<ul> <li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
document.querySelector('li:first-child').innerHTML = "Item 1 is replaced by js"
document.querySelector('li:nth-child(3)').innerHTML = "Item 3 is replaced by js again"
document.querySelector('.card-header').innerHTML += "<ul> <li>Test 1</li><li>Test 2</li><li>Test 3</li></ul>"
const cardUL = document.querySelectorAll('.card-header ul'); // returns array of ul's under card-header
for (const cardULElement of cardUL) {
	cardULElement.style.backgroundColor = "yellow"
}

// DOM üzerinde gezinme

// property altındaki children ile erişebiliriz *children , *firstElementChild , *lastElementChild, *parentElement, *nextElementSibling, *previousElementSibling
let ul = document.querySelector(".card-header ul")
// ul = ul.children;  // HTMLCollection(3) [li, li, li]
// or
ul = ul.children[0];
console.log(ul); // item1

ul = ul.nextElementSibling;
console.log(ul); // item2

ul = ul.parentNode;
console.log(ul); // ul

let result = document.getElementById("title").parentElement;
console.log(result); // card-header

// size selection card
let sizeUl = document.querySelector(".size-group");
// let sizeArr = ["2X-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large", "5X-Large"];
let sizeObj = [
	{id: 1, size: "2X-Small"},
	{id: 2, size: "X-Small"},
	{id: 3, size: "Small"},
	{id: 4, size: "Medium"},
	{id: 4, size: "Large"},
	{id: 5, size: "X-Large"},
	{id: 6, size: "XX-Large"},
	{id: 6, size: "3X-Large"},
	{id: 6, size: "4X-Large"},
	{id: 6, size: "5X-Large"}
];

	/*
	//dinamik hale getirelim, ARR ile ve in ile dönüyoruz - ilk hali index veriyor köşeliyle key erişebilirsin
	for (const sizeArrKey in sizeArr) {
		//element create
		// let count = sizeUl.children.length;
		let sizeLi = document.createElement('li');
		sizeLi.className = "size-group-item"
		sizeLi.innerHTML = `
		                    <div class="form-check">
		                        <input type="checkbox" id="${sizeArrKey}" class="form-check-input">
		                        <label for="${sizeArrKey}" class="form-check-label">${sizeArr[sizeArrKey]}</label>
		                    </div>
		            `;
		//insert element
		sizeUl.insertAdjacentElement("beforeend", sizeLi);
	}
	*/

// dinamik hale getirelim, obj ile yapalım bu durumda of yeterli
for (const sizeObjKey of sizeObj) {
	//element create
	// let count = sizeUl.children.length;
	let sizeLi = document.createElement('li');
	sizeLi.className = "size-group-item"
	sizeLi.innerHTML = `
	                    <div class="form-check">
	                        <input type="checkbox" id="${sizeObjKey.id}" class="form-check-input">
	                        <label for="${sizeObjKey.id}" class="form-check-label">${sizeObjKey.size}</label>
	                    </div>
	            `;
	//insert element
	sizeUl.insertAdjacentElement("beforeend", sizeLi);
}
// element silme
// document.querySelector(".size-group").remove();
// document.querySelector(".size-group").removeAttribute("class");
// console.log(document.querySelector(".size-group").children[1].getAttribute("class"));  // size-group-item
// document.querySelector(".size-group").children[1].setAttribute("new class");
// console.log(document.querySelector(".size-group").parentElement.classList);  // class'ların listesini alabilirsin
// classlist ile birlikte add ve remove da kullanabilirsin daha kolay class ismi eklemek için falan
// classlist ile contains kullanabilirsin var mı yok mu check için
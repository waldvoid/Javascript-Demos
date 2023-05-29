// Event listeners
const sizeButton = document.getElementById('size-button');

// prevent default ile sayfa yenileme önleme
sizeButton.addEventListener('click', (event) => {
	event.preventDefault();
	console.log("Submitted");

})

// outer fonksiyonla da yapabilirsin daha pratik olabiliriz
sizeButton.addEventListener('click', sizeSubmit);

function sizeSubmit(event) {
	console.log("Submitted with outer func");
	console.log(event);
	// event altındaki keylerle birçok şeye erişmemizi sağlayabilir
	// aşağıdaki target key'i html değerini döndürür
	event.target.classList.add('submitted');
	event.preventDefault();
}
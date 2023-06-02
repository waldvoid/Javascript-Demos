// function to handle success
function success() {
	var data = JSON.parse(this.responseText); //parse the string to JSON
	console.log(data);
}

// function to handle error
function error(err) {
	console.log("Request Failed", err); //error details will be in the "err" object
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = () => {
	let data = JSON.parse(xhr.responseText);
	console.log(data);
	console.log("Request Completed"); // arrow func
};

xhr.onload = success; // regular way
xhr.onerror = (err) => {
	console.log("there is an error occured", err); // arrow func
};

xhr.onerror = error; // regular way

// call success function if request is successful // call error function if request failed
xhr.open("GET", "https://api.github.com/users/waldvoid"); // open a GET request
xhr.send(); // send the request to the server.

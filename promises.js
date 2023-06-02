fetch("https://api.github.com/users/manishmshiva")
	// Handle success
	.then((response) => response.json()) // convert to json or use text() string  or blob(), formData() and arrayBuffer()
	.then((json) => console.log(json)) //print data to console
	.catch((err) => console.log("Request Failed", err)); // Catch errors

function createMachine(name, status) {
	return {
		name,
		status,
	};
}
console.log(createMachine("lala", "active"));

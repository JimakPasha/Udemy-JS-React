const requestURL = 'https://jsonplaceholder.typicode.com/users';

// метод фетч - не так широко поддерживается браузерами, но он более современный
// этот метод и так возвращает промис
function sendRequest(method, url, body = null) {
	return fetch(url).then(response => {
		return response.json();
		// return response.text(); // если сделаем так, то получим строку
	});
}


const body = {
	name: 'alex',
	age: 26
}

sendRequest('GET', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err));
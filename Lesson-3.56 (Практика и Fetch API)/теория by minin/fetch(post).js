const requestURL = 'https://jsonplaceholder.typicode.com/users';

// метод фетч - не так широко поддерживается браузерами, но он более современный
// этот метод и так возвращает промис
function sendRequest(method, url, body = null) {
	const headers = {
		'Content-Type': 'application/json'
	};

	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers;
	}).then(response => {
		if (response.ok) {
			return response.json();
		}

		return response.json().then(error => { // один из способов прописать ошибку
			const e = new Error('Что-то пошло не так');
			e.data = error;
			throw e;
		});
	});
}


const body = {
	name: 'alex',
	age: 26
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err));
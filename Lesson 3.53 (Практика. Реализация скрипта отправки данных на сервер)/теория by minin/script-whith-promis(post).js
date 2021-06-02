const requestURL = 'https://jsonplaceholder.typicode.com/users';


// создадим post запрос
// тут нам нужен третий аргумент
function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json'
		xhr.setRequestHeader('Content-Type', 'application/json'); // нужен этот параметр. Для чего пока особо не понял.

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		}

		xhr.onerror = () => {
			reject(xhr.response);
		}

		xhr.send(JSON.stringify(body));
	});
}


const body = {
	name: 'alex',
	age: 26
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err));
const requestURL = 'https://jsonplaceholder.typicode.com/users';
// создадим промис, который будет возвращать промис

function sendRequest(method, url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(JSON.parse(xhr.response));
			}
		}

		xhr.onerror = () => {
			reject(xhr.response);
		}

		xhr.send();
	});
}

sendRequest('GET', requestURL)
	.then(data => console.log(data))
	.catch(err => console.log(err));

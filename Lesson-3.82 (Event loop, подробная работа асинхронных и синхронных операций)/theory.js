'use strict';

//частый вопрос на собесе, как это работает. в какой последовательности выполнится?

console.log(1);

setTimeout(() => {
	console.log('timeout1');
}, 4000);

setTimeout(() => {
	console.log('timeout2');
}, 2000);

console.log(2);

// или

setTimeout(() => {
	console.log(1);
}, 0);

console.log(2);
// отвечать надо на собесе, что начала выполнится синхроный код, а затем уже асинхнронный
// и ещё фишка, что когда js видит там 0 сек, то он автоматически подставляет там 4 милисекунды. Сделано это для совместимости с разными браузерами, чттобы хоть какая-тио задержка была

// как работает Event loop лучше всего видно на след ресурсе
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKCmFyciA9IFsxLDIsMyw0LDVdOwoKYXJyLmZvckVhY2goaXRlbSA9PiB7CiAgIGNvbnNvbGUubG9nKGl0ZW0pOyAKfSkK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

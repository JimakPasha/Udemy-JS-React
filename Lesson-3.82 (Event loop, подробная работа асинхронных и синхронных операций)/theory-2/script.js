'use strict';

let k = 0;

function count() {
	for (let i = 0; i < 1e9; i++) {
		k++;
	}
	alert('done!');
}

count();

// тут мы специально нагрузили наш браузер, ему нужно выполнить очень большой цикл (1e9 - это означает 9 нулей). И пока он цикл не выполнит, доступа к странице не будет. Это мы должны знать, и если нам предстоит сделать такую большую операцию, лучше разбить её на кусочки
'use strict';

// если поставим галочку и перезагрузим страницу, то галочка сохранится, потому что будет хранится в localStorage
// также проделываем похожую логику со сменой цвета

const checkbox = document.querySelector('#checkbox'),
	form = document.querySelector('form'), 
	changeColor = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

changeColor.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

	// поэксперементируем с объектами

	// допустим мы получили такие данные от человека и хотим их для него сохранить
	const person = {
		name: 'Alex',
		age: 25
	}

	const serializedPerson = JSON.stringify(person);
	localStorage.setItem('alex', serializedPerson);

	console.log(JSON.parse(localStorage.getItem('alex')));



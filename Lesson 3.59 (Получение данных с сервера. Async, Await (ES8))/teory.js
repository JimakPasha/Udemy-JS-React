// Это просто конспект. Код рабочий в папке практики
Что делаем в этом уроке. 

Есть смысл функционал по общению с сервером вынести в отдельную функцию. Делаем этом

forms.forEach(item => {
	bindPostData(item);
});

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	});

	return await res.json();
};

function bindPostData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const statusMessage = document.createElement('img');
		statusMessage.src = message.loading;
		statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
		form.insertAdjacentElement('afterend', statusMessage);

		const formData = new FormData(form);

		const object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});

		postData('http://localhost:3000/requests', JSON.stringify(object))
			.then(data => {
				console.log(data);
				showThankModal(message.success);
				statusMessage.remove();
			}).catch(() => {
				showThankModal(message.failure);
			}).finally(() => {
				form.reset();
			})

	});
}


поясню строчки кода: 
Надо помнить что функция postData это асинхронный код. И код не будет ждать никого.
Почему это проблема? 
Запускается fetch, а потом он кладётся в переменную res. Но фэтч может не успеть выполнится (т.к. это работа с сервером и такое произойдёт запросто) и запустится return res.json();, но res у нас будет пустой и возникнет ошибка.
Как исправить?
Для этого у нас есть механизм async-await
	async ставится перед функцией. Когда мы это ставим, это значит, что внутри функции у нас будет асинхрнный код. Он просто это говорит, но ничего не делает.
	А вот await(это парный оператор async - друг без друга они не работают)
Теперь у нас запускается функция postData, но за счёт async-await - res будет ждать результат запроса (по стандарту ждёт не более 30 сек).


// -----------------------------------
меняем объект на json

const json = JSON.stringify(Object.fromEntries(formData.entries()));
postData('http://localhost:3000/requests', json)

сначала наш объект превращаем в массивза счёт formData.entries(), далее преобразуем наш массив в объект по средствами fromEntries, и затем превращаем в строку stringify.

// -----------------------------------
2 часть 17.25
Задача построить карточке меню, основываясь на данных в db.json

для этого нам понадобится такая же функция, только для get зпросов

const getResource = async (url) => {
	const res = await fetch(url);

	return await res.json();
};
// но фетч, если столкнётся с какой-то ошибкой в http запросе, то он не выдаст catch, т.е. reject - это не будет для него ошибкой, Ошибка для него это отсутствие интернета или другие технические неполадки в самом запросе, поэтому такой поведение мы должны в ручную обработать

const getResource = async (url) => {
	const res = await fetch(url);

	if(!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`); // чтобы выкинуть ошибку пишем throw
	}

	return await res.json();
};


// вызываем функцию
getResource('http://localhost:3000/menu')
	.then(data => {
		data.forEach(obj => {
			new MenuCard(obj.img, obj.altimg,).render(); // но так писать слишком долго, перечислять свойства объекта в аргументы менюКард. поэтому мы используем деструкторизацию объекта - это когда из объекта мы вытаскиваем свойства, в качестве отдельной переменной (см ниже)
		});
	});

getResource('http://localhost:3000/menu')
	.then(data => {
		data.forEach(({img, altimg, title, descr, price}) => {
			new MenuCard(img, altimg, title, descr, price, 'menu.container').render();
		});
	});



	// -----------------------------------
	// -----------------------------------
	// -----------------------------------	// -----------------------------------
	// -----------------------------------
	// -----------------------------------	// -----------------------------------
	// -----------------------------------
	// -----------------------------------	// -----------------------------------
	// -----------------------------------
	// -----------------------------------
	Дополнительная часть урока

	Второй вариант создание карточек
	Это обязательно удалить, чтобды второй способ заработал
// getResource('http://localhost:3000/menu')
// 	.then(data => {
// 		data.forEach(({ img, altimg, title, descr, price }) => {
// 			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
// 		});
// 	});

	пишем следующее:

	Отличие этого способа: не формирует классы

getResource('http://localhost:3000/menu')
	.then(data => createCard(data));

	function createCard(data) {
		data.forEach(({ img, altimg, title, descr, price })) => {
			const element = document.createElement('div');
			element.classList.add('menu__item');
			element.innerHTML = `
				<img src=${img} alt=${altimg}>
				<h3 class="menu__item-subtitle">${title}</h3>
				<div class="menu__item-descr">${descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${price}</span> грн/день</div>
				</div>
			`;

			document.querySelector('.menu .container').append(element);
		}
	}


	Если нам нужно только один раз, что-то построить, то лучше этот метод юзать
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// ДЕЛАЕМ ТАБЫ В НАШЕМ ПРОЕКТЕ
// разбиваем на три задачи. 1) Скрыть контент неактивных табов 2) показать контент активного таба, и добавить активный класс у заголовков табов 3) обработчик событий на наших табах


window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

        // функция hideTabContent, будет скрывать каждый табконтент и удалять активный класс у табхэдера
        function hideTabContent() {
          tabContent.forEach(item => { // названия аргумента произвольное
            // item.style.display = 'none'; // можно сделать так, если без добавления какой-то трансформации красивой
            item.classList.add('hide'); // в данном случае toggle не заменить, т.к. будет мешанина с классами
            item.classList.remove('show', 'fade');
          });

          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          });
        }


        // создадим функцию которая будет показывать активный таб и добавлять активный класс этому табу
        // в аргумент мы можем поставить значение по умолчанию i = 0
        function showTabContent(i = 0) { 
          // tabContent[i].style.display = 'block'; // можно сделать так, если без добавления какой-то трансформации красивой
          tabContent[i].classList.add('show', 'fade');
          tabContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
        }

  hideTabContent();
  showTabContent();


  // и вешаем обработчик событий на наших табах (чтобы табы переключались)
  tabParent.addEventListener('click', (event) => {
    const target = event.target; // если в функции нужно будет часто использовать ивент.таргет, то проще её запихнуть в отдельную переменную.
    // нам нужно для начала проверить, что мы попали в наш таргет. 
    // и перебрать все табсы, и если он совпадает с таргетом табса, то запускаем наши функции
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });





//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// Создаём таймер
// Алгоритм действий:
// 1) У нас будет функция, которая будет устанавливать наш таймер. Получать элементы (цифры) и что-то с ними делать
// 2) Должна быть функция, которая будет определять разницу между временем


const deadline = '2021-06-01';


  // Чтобы понять сколько осталось, нужно сравнить дату существующу и когда дедлайн
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()); // получим кол-во миллисекунд (т.е. сколько миллисекунд осталось до конца акции, но теперь нам нужно перевести эти миллисекунды в дни часы минуты секунды)
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
  }


  // пишем функцию для того чтобы подставлять впереди 0 (если это требует тз)
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  // напишем функцию чтобы установить наш таймер на страницу
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

          updateClock(); // для того чтоюы не было моргания вёрстки

          function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) {
              clearInterval(timeInterval);
            }
          }
  }

  setClock('.timer', deadline);






//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// Создаём модальное окно
// в хтмл у нас есть свёрстанное это модальное окно у и него дисплей нон. Нам нужны кнопки которые будут вызывать окно.
// В хтмл структуре у нас есть несоклько кнопок(2), которые будут вызывать наше окно. Пометитм их одинаковыми дата-атрибутами(data-modal), а также в модальном окне есть кнопка закрыть и ей мы пропишем data-close



	const modal = document.querySelector('.modal');
	const modalTrigger = document.querySelectorAll('[data-modal]');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
		clearInterval(modalTimerId); // если юзер успеет до сет таймаута посмотреть наше окно модальное, а оно потом снова будет выскакивать, то это не ок совсем. Для этого и прописываем данную штуку
	}

	modalTrigger.forEach(btn => {
			btn.addEventListener('click', openModal);
	});

	modal.addEventListener('click', (e) => { 
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});


	document.addEventListener('keydown', (e) => {
		if (e.keyCode === 27 && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// сделаем функционал, который будет вызывать наше модальное окно через какое-то время на экране

	const modalTimerId = setTimeout(openModal, 50000);

	// казалось бы вс ок. Но если юзер успеет до сет таймаута посмотреть наше окно модальное, а оно потом снова будет выскакивать, то это не ок совсем. Решение мы сделаем в функции openModal

	// надо реализовать функционал, что если юзер долистает до конца сайта(страницы), то ему должно показаться наше модальное окно

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { // pageYOffset - прокрученная часть в px.(которая уже прокрутилась). clientHeight - видимая часть, которую мы вот прямо видим на данный этап. scrollHeight - эта вся высота
			openModal(); // {once: true} пишем для того (в конце функции, как опцию), чтобы действие происходило один раз. но! оно работать не будет т.к. скролл мы повесили на виндоу. и если мы чуть пролистнули, то событие всё - исчезает
			window.removeEventListener('scroll', showModalByScroll); // вот таким способом мы можем сделать, что бы один раз выполнялось
		}
	}

	window.addEventListener('scroll', showModalByScroll);






//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
	// Классы для карточек (у нас карточки будут создаваться с помощью js)
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 28;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<div class="menu__item">
					<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
							<div class="menu__item-cost">Цена:</div>
							<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
        </div>
			`;
			this.parent.append(element);
		}
	}

	// const div = new MenuCard();
	// div.render(); // можно так, но можно и короче

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		".menu .container"
	).render(); // создаём объект и сразу вызываем метод

new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
		14,
		".menu .container"
	).render();

	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		21,
		".menu .container"
	).render();

//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// соберём данные с нашего сайта и отправим на бэк
// нам нуждно расчехлить на локальном сервере, т.к. будут уже post запросы.
// наша задача взять несколько форм, которые есть на сайте и отправлять данные в файл php. формы у нас 2 и функционал по отправке у нас повторяется. Т.е. создаём функцию по отправке и используем её в каждой форме. 
// мы будем использовать XMLHttpRequest, но через несколько уроков перейдём на современный вариант

		// const forms = document.querySelectorAll('form');

		// const message = {
		// 	loading: 'Загрузка...',
		// 	success: 'Спасибо! Скоро мы с вами свяжемся',
		// 	failure: 'Что-то пошло не так...'
		// };

		// forms.forEach(item => {
		// 	postData(item);
		// });

		// function postData(form) {
		// 	form.addEventListener('submit', (e) => {
		// 		e.preventDefault(); // это для того, что бы отменитть стандартное дейстиве на странице. а стандартное оно с перезагрузкой. нам не подходит

		// 		const statusMessage = document.createElement('div');
		// 		statusMessage.classList.add('status');
		// 		statusMessage.textContent = message.loading;
		// 		form.append(statusMessage);

		// 		const request = new XMLHttpRequest();
		// 		request.open('POST', 'server.php');
		// 		// присылать данные можно в разных форматах, это нам должен сказать бэкендер.
		// 		// request.setRequestHeader('Content-type', 'multipart/form-data');// часто пишут эту строчку новички. но это ошибка. При связке XMLHttpRequest + formData, заголовок устанавливается автоматически
		// 		const formData = new FormData(form);// formData позволяет сформировать данные, которые заполнил юзер. формирует формат ключ-значение. в аргумент formData помещаем с какой формы. И тут важно!!! Чтобы инпуты, которые отправляют на сервер имели атрибут name. Иначе FormData не сможет ничего найти.

		// 		request.send(formData);

		// 		request.addEventListener('load', () => {
		// 			if (request.status === 200) {
		// 				console.log(request.response);
		// 				statusMessage.textContent = message.success;
		// 				form.reset();
		// 				setTimeout(() => {
		// 					statusMessage.remove();
		// 				}, 2000);
		// 			} else {
		// 				statusMessage.textContent = message.failure;
		// 			}
		// 		});


		// 	});
		// }


		// второй вариант с json


	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		postData(item);
	});

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault(); // это для того, что бы отменитть стандартное дейстиве на странице. а стандартное оно с перезагрузкой. нам не подходит

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading; // можно с помощью добавления атррибута (сетатрибут), разницы нет. это просто разный синтаксис
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage); // используем такой метод вставки, потому что аппендом немного полетит вёрстка(в нашей второй форме). и в первом аргументе мы указываем куда вставим, вторым что вставим 

			const request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			// присылать данные можно в разных форматах, это нам должен сказать бэкендер.
			request.setRequestHeader('Content-type', 'application/json');
			const formData = new FormData(form);

			const object = {};
				formData.forEach(function (value, key) {
					object[key] = value;
				});

			const json = JSON.stringify(object);


			request.send(json);

			request.addEventListener('load', () => {
				if (request.status === 200) {
					console.log(request.response);
					showThankModal(message.success);
					form.reset();
					statusMessage.remove();
				} else {
					showThankModal(message.failure);
				}
			});


		});
	}

	// создаём функцию открытия модального при успешной загрузке
	function showThankModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide'); // скрываем наше модальное окно (в котором инпуты и всё это)
		openModal(); // функция открывает модалку

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}
});



// примечание. В начале писать скрипты просто чтобы они работали, а уже потом улучшать - это норма
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// ДЕЛАЕМ ТАБЫ В НАШЕМ ПРОЕКТЕ


window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

        function hideTabContent() {
          tabContent.forEach(item => { 
            item.classList.add('hide'); 
            item.classList.remove('show', 'fade');
          });

          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          });
        }

        function showTabContent(i = 0) { 
          tabContent[i].classList.add('show', 'fade');
          tabContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
        }

  hideTabContent();
  showTabContent();

  tabParent.addEventListener('click', (event) => {
    const target = event.target; 
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



const deadline = '2021-06-01';



  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()); 
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



  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

          updateClock(); 

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
		clearInterval(modalTimerId);
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


	const modalTimerId = setTimeout(openModal, 50000);


	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(); 
			window.removeEventListener('scroll', showModalByScroll); 
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
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.classes = "menu__item";
				element.classList.add(this.classes);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
			this.parent.append(element);
		}
	}

	const getResource = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`); // чтобы выкинуть ошибку пишем throw
		}

		return await res.json();
	};

	getResource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({ img, altimg, title, descr, price }) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});

//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
//   -------------------------------------------------------
// соберём данные с нашего сайта и отправим на бэк





	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

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



			// ТАК МЫ ПЕРЕПИСАЛИ заменив XMLHttpRequest на fetch
			//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

			const formData = new FormData(form);

			// const object = {};
			// formData.forEach(function (value, key) {
			// 	object[key] = value;
			// }); можно так, но мы воспользуемся более современным методом ниже 
			// postData('http://localhost:3000/requests', JSON.stringify(object)) - в постдате было так, но будет так, как ниже написано. просто вторым аргументом json

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
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

				//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	function showThankModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide'); 
		openModal();

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

	fetch('db.json')
		.then(data => data.json())
		.then(res => console.log(res));

});

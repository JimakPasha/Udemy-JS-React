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


});
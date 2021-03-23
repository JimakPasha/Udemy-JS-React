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

});


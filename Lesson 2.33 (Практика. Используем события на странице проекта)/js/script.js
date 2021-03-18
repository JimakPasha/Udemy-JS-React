/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Бывают такие моменты когда наш ДОМ ещё не подгрузился, а скрипт уже начал выполнятся (обычно это в более крупных проектах). Для этого нам нужно весь наш скрипт поместить в определённую колбэк-функцию: document.addEventListener('DOMContentLoaded', () => { ...наш весь код...}); вместо document можно писать и встретить window - конкретно тут разницы нет.

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'), // добавляем наши элементы
      addInput = addForm.querySelector('.adding__input'), // добавляем наши элементы
      checkbox = addForm.querySelector('[type="checkbox"]'); // добавляем наши элементы

  addForm.addEventListener('submit', (e) => {
    e.preventDefault(); // убираем стандартную форму отправки

    let newFilm = addInput.value; // переменная в которой хранится значение, кот. ввёл юзер
    const favorite = checkbox.checked; // тут храниться есть галочка или нет

    if (newFilm) { // пишем условие, чтобы нельзя было добавить пустую строку
      
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
      }
      
      movieDB.movies.push(newFilm); // пушим в наш массив наш фильм, который ввёл юзер
      sortArr(movieDB.movies); // сортируем наш массив по алфавиту
  
      createMovieList(movieDB.movies, movieList);
    }

    e.target.reset(); // можно написать addForm.reset(); это действие очищает нашу форму

  });

  const deleteAdv = (arr) => {
    adv.forEach(item => {
      item.remove();
    });
  };


  const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };


  const sortArr = (arr) => {
    arr.sort();
  };

  
  function createMovieList(films, parent) { // тут мы нашу функцию немного переделываем, и делаем её более универсальной. теперь в аргументы можно задать фильмы и родительский элемент, куда добовляем 
    parent.innerHTML = '';

    sortArr(films); // сортировка, когда мы удаляем сбивается, поэтому делаем так

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
        </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => { // берём все наши корзинки, перебираем их
      btn.addEventListener('click', () => { // при клике удаляем наш родительский элемент
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1); // добавляем в нашу базу фильмов используя сплайс, где и номер - порядок, а 1 с какой цифры будет начинаться 

        createMovieList(films, parent); // это рекурсия (функция вызвает себя в самой себе), делаем для того, чтобы наша нумерация фильмов переопределялась. и была с 1 до ...
      });
    });

  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);

});



  // const userFilmEnter = document.querySelectorAll('.adding__input.value').parentNode;
  // const btnEnter = document.querySelector('button');

  // console.log(movieDB);


  // btnEnter.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   movieDB.movies.push(userFilmEnter);
  //   document.movieDB.movies.append();
  //   console.log(movieDB);
  // });

'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');




      
      //чтобы посмотреть что мы можем сделать с тем или иным элементом на странице. можем посмотреть на него в качестве объекта
      console.dir(box);
      // у объекта есть объект style
      box.style.backgroundColor = 'blue'; // они записываются инлайново. свойства прописываем также как и в css.


      btns[1].style.borderRadius = '100%';

      // circles.style.backgroundColor = 'red'; // но ничего не поменяется и будет ошибка. почему? потому что мы обращаемся к псевдомассиву, у которого объекта style нет! нужно чётко указать элемент. см. ниже

      circles[0].style.backgroundColor = 'red';


      // существует способ передачи стилей как текста
      box.style.cssText = 'background-color: blue; width: 500px';
      // заметь что тут бг-колор не кэмелкейсом
      // box.style.cssText = `background-color: blue; width: ${num}px`; // тут мы вставили переменную. но не забываем, что в таком случае нужны бэктики 





      // как назначить свойства сразу нескольким?
      // способ 1 оч редкий. с помощью цикла
      for (let i = 0; i < hearts.length; i++) {
        hearts[i].style.backgroundColor = 'yellow';
      };
      // способ 2

      hearts.forEach(item => {
        item.style.backgroundColor = '#000';
      });

      
      


      
      // очень часто сайты создаются с помощью js

      const div = document.createElement('div'); // создан тег и он существует внутри js

      // можно создавать текстовые узлы. это элементы без оболочки тега
      const text = document.createTextNode('Тут текст'); // используется редко. 
      // часто называют не элементы а ноды.

      div.classList.add('black'); // добавим div класс

// ----------------------------------------------------
      // современные методы. они не работают в старом браузере
      document.body.append(div); // добавляет див в конец бади
      // document.querySelector('.wrapper').append(div); // можно не задавать тут впереди переменную, если это будет только единажды
      // Но врапер нам ещё понадобится, поэтому добавим его в переменную

const wrapper = document.querySelector('.wrapper');

wrapper.prepend(div); // вставляет в начало врапера

hearts[0].before(div); // можно так ставить перед первый хартс
hearts[0].after(div); // можно так ставить после первый хартс

circles[0].remove(); // удалить первый circle

hearts[0].replaceWith(circles[0]); // один элемент заменить другим. Сначала указываем какой элемент заменим, а затем каким заменим


// Более устаревшие конструкции, но очень часто встречающиеся в уже написанном коде

wrapper.appenddChild(div); // тоже самое что просто append

wrapper.insertBefore(div, hearts[0]) // когда не было просто .before, .after, .prepend то использовали это. Тут задаются аргументы. Где первый аргуемнт это что вставляем, а второй куда

wrapper.removeChild(hearts[1]);// раньше не было также remove и использовали этот

wrapper.replaceChild(circles[0], hearts[0]); // раеьше не было replaceWith и использовали эту. первый аргумент на который хотим поменять, второй тот который меняется

div.innerHTML = 'Hello, man!'; // редактирование элемента
div.innerHTML = '<h1>Hello, man!</h1>'; // а можно даже теги

div.textContent = 'Hi Hi Hi'; // ну а тут просто текст


div.insertAdjacentHTML('', '<h2>Hello, Hello!</h2>'); // в первый аргумент пишем значния которые уже существуют в js. это могут быть аргументы (afterbegin, afterend, beforebegin, beforeend). Названия говорят сами за себя(о месте вставки)


// ----------------------------------------------
// ----------------------------------------------
// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
// //       oneHeart = document.querySelector('.heart');

// в самом начале мы писали так. и например тут
//       hearts = document.querySelectorAll('.heart') это значит харт внутри документа. но мы можем сделать так
//       hearts = wrapper.querySelectorAll('.heart')
// и это будет значить харт внутри враппера искать
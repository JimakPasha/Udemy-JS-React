'use strict';

// Оброботчик события это функция, которая срабатывает, как только событие произошло

// 3 вида того, как передать событие





// 1 способ. Его не используют! И настоятельная просьба его не применять! Только для самых маленьких скриптов либо тестовых проектах
// прописать в виде атрибута в хтмл (в хтмл файле я всё это писал)
// <button onclick="alert('You click on button!?')" id="btn">Нажми меня</button> 




// 2 способ. Тоже редкий способ!!! Почему? о проблеме этого способа ниже. Использовать свойства DOM дерева для событий.
const btn2 = document.getElementsByClassName('btn2');
btn2[0].onclick = function() {
  alert('Это событие при клике сделано с помощью свойства DOM дерева. Но это тоже редкий способ!!!');
}; // onclick - это свойства дом-дерева
// Проблема этого способа. Если мы хотим ещё раз кликнуть и показать юзеру что-то другое, и пропишем ниже такой же код, то он напрочь перекроет наш первый вариант клика. И иногда это плохо. А также иногда оброботчики событий нужно удалять, т.е. мы кликнули и всё больше не нужно чтобы что-то происходило, если мы так назначили, то уже удалить не сможем.



// 3 способ
const btn3 = document.getElementsByClassName('btn3');
btn3[0].addEventListener('click', () =>{
  alert('Это событие при клике сделано с помощью addEventListener. Это хороший способ передачи события!')
}); // тут мы говорим что js будет следить за этим элементом, если произошло что-то, а что мы передаём в первый аргумент (в данном случае по клику), второй аргумент колбэк функция - которая и будет нашим обработчиком
// у этого способа большой плюс! Мы можем назначать несколько действий на одно событие. Смотри ниже
btn3[0].addEventListener('click', () => {
  alert('2')
});

btn3[0].addEventListener('click', () => {
  alert('3')
});




// Стоит знать и помнить, что события выполняются в порядке очереди. Как только новое событие поступило, оно добовляется в очередь др событий
// Ещё нам иногда нужно получать данные о том элементе с которым мы взаимодействуем ( что за событие сейчас произошло, или что за элемент сейчас используется или возможно координаты и тд. для этого у нас есть спец объект event - событие, он как и любой объект в js имеет свойтва). И этот объект события у нас передаётся как аргумент в колбэк функцию (event), называть можно как угодно, можно просто (e), но он всегда будет первым. Поэтому если в аргумент нужно ещё какие-то данные (текстовые например), то их указваем через запятую после (e).  btn3[0].addEventListener('click', (event) => {
// alert('2')
// });
const btn4 = document.getElementsByClassName('btn4');
btn4[0].addEventListener('mouseenter', (e) => {
  console.log(e.target); 
  e.target.remove(); // мы просто удаляем элемент
});


// можно сделать вот такой вариант, если мы хотим удаление запихнуть в отдельную переменную
// const deleteElement = (e) => {
//   e.target.remove();
// };

// btn4.addEventListener('click', deleteElement); тут мы говорим, что при клике будем ссылаться на функцию deleteElement. мы это всё затеили для того, чтобы использовать значение removeEventListener.
// btn4.removeEventListener('click', deleteElement);


// благодаря всему этому мы можем написать следующий код, который будет значить, что после того, как мы один раз клацнули, дальше клацнуть уже будет нельзя.
// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn4.removeEventListener('click', deleteElement);
//   }
// };



// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Существует такое важное понятие, как всплытие событий.
// Создадим вложенную структуру и каждому элементу назначим событие. Пишем это в хтмл. класс - 2

const overlay = document.querySelector('.overlay');
const btn = overlay.getElementById('btn');

const deleteElement = (e) => {
  console.log(e.target); // console.log(e.currentTarget); поменяется порядок
  console.log(e.type);
}
overlay.addEventListener('click', deleteElement);
btn.addEventListener('click', deleteElement);

// событие сначала произошлот на том, который идёт вложеннее, а затем по иерархии оно поднялось и сработало уже на оверлеи. это и называется всплытие события


// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// можно отменять обработчики стандартных событий. Они заложены уже браузером, например по ссылке мы переходим. мы можем это отменять.

// 1) способ устаревший формат добавление в конце returnFoals

2) способ
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault(); // заметь, что оно помещается в самое начало. Мы как бы говорим, нужно отменить стандартное поведение, и будем делать, то, что нам запрограмируют
  console.log(event.target);
});
// теперь по ссылке у нас не будет переходить по ней




// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// чтобы вешать на несоклько элементов обработчики событий, нам нужно псевдомассив полностью перебрать и на каждый элемент внутри навесить обработчики
// btn.forEach(item => {
//   item.addEventListener('click', deleteElement);
// });



// Опции событий (это третий аргумент)
btn.addEventListener('click', deleteElement, {once: true}); //например once
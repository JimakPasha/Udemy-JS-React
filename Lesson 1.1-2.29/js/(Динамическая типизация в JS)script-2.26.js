'use strict';

// Динамическая типизация это возможность превращения из однорго типа данных в другой

// to string----------------------------------------

// 1) старый дедовский метод

console.log(typeof(String(null))); // он просто обернёт кавычками null и мы получим строку
console.log(String(null));


// 2) конкатенация - сложение строки с чем-то

console.log(typeof(5 + '')); // при сложении со строкой, мы получаем строку


const num = 5;
console.log('http://vk.com/catalog/' + num); //староватая запись, но встречать будет часто. в новой больше юзают бэктики

const fontSize = 26 + 'px';

// to Number------------------------------------

// 1) Оч редко юзают этот способ 
console.log(typeof (Number('4')));
console.log(Number('4'));

// 2)  
console.log(typeof (+'4')); // просто подставляем плюс
console.log(+'4');

// 3)
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));


let answ = +prompt('Hello', ''); // поставив плюсик у промпт, мы преобразовываем строку в числовой тип данных

// Всё что мы получаем от пользователей, это всё строки! И их можно преобразовывать



// to Boolean

// 0, '', null, undefined, NaN  - всё это false 
// 1)
let switcher = null;

if (switcher) {
  console.log('Working...');
} // работать не будет, т.к. switcher это null, a null это false


switcher = 1;

if (switcher) {
  console.log('Working...');
} // а тут сработает, т.к. 1 это true


// 2)
console.log(typeof(Boolean('4')));

// 3) Оч оч редко
console.log(typeof (!!'4')); // превратится в булевое значение
'use strict';

let a = 5,
    b = a;

    b = b + 5;

    console.log(b);
    console.log(a);



// но такая штука работает только с простыми типами данных, но не с объектами. Т.к. существует понятие передача по ссылке и передача по значению. С простыми типами он передаёт значени и полностью копирует, в объектах он ссылается, поэтому и такой результат

    const obj = {
      a: 5,
      b: 1
    };

    const copy = obj;

    copy.a = 10;

    console.log(copy);
    console.log(obj);



// Однака с помощью функции мы можем не передать по ссылке, а полностью клонировацть объект, и уже с новым объектом взаимодействовать так как нам нужно не меняя старый
// Вариант 1 клонирования объекта

    function copyF(mainObj) {
      let objCopy = {};

      let key;
      for (key in mainObj) {
        objCopy[key] = mainObj[key];
      }

      return objCopy;
    }

    const numbers = {
      a: 2,
      b: 5,
      c: {
        x: 7,
        y: 4
      }
    };

    const newNumbers = copyF(numbers);

    newNumbers.a = 10;

    console.log(newNumbers);
    console.log(numbers);



// но если мы захотим заменить вложеный объект, то снова получим передачу по ссылке. 
// Отсюда следует, что есть поверхносная копия объектов (это наш случай, это копия первого уровня вложености). Но ещё существуют глубокие копии

newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);



//  объединение объектов с помощью Object.assign(), и одновременно мы создаём поверхносную копию объекта
// Вариант 2 клонирования объекта

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign(numbers, add)); // первым аргументом пишем к которому будем присоединять


const clone = Object.assign({}, add); // а можно создать клон add, если его добавим к пустому объекту, и засунем это всё в переменную 

clone.d = 20;

console.log(add);
console.log(clone);




// Копии массивов с помощью метода slice()
// Вариант 1 клонирования массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'aasdasdasdasd';
console.log(oldArray);
console.log(newArray);



// Вариант 2 клонирования массива
// это оператор spread (ES6-ES9)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

      // вот ещё про копию с помощью spread

      const array = ['a', 'b'];
      const newArray2 = [...array];
      
      console.log(array);
      console.log(newArray2);


      // этот же вариант, но сложнее

      function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
      }

      const num = [2, 5, 7];

      log(...num);




// а теперь с помощью spread клоны объектов
      const q = {
        one: 1,
        two: 2
      };

      const newObj = {...q};

console.log(q);
console.log(newObj);
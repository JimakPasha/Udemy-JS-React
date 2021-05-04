'use strict';

// Методы и свойства строк и чисел
// Методов и свойств существет очень много

// Свойства

const str = 'teSt';
const arr = [1, 2, 4];


console.log(str.length);
console.log(arr.length);
console.log(str[2]);

// Методы

console.log(str.toUpperCase());
console.log(str.toLowerCase);
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //получим 5, т.к. фруит начинается с индекса 5 позиции
console.log(fruit.indexOf('q')); //получим -1, т.к. ёне найдено

// Методы для строк

const phrase = 'Hello world';
console.log(phrase.slice(6, 11)); //в аргументе первая цифра с какой позиции, последняя по какую, не включая
console.log(phrase.slice(6));
console.log(phrase.slice(-5, -1));

console.log(phrase.substring(6, 11)); //похожий метод на слайс, но не поддерживает минус

console.log(phrase.substr(6, 5)); // этот метод в аргументе указывает первую позицию, а второе число это сколько нужно вырезать символов

// Методы для чисел

const num = 12.2;
console.log(Math.round(num)); // метод округления чисел

const test = '12.2px';
console.log(parseInt(test)); // метод переводит в другоую систему исчисления и он переобразовал нам строку в число
console.log(parseFloat(test)); // метод чтобы взять строку или число и вернуть в десятичном значении
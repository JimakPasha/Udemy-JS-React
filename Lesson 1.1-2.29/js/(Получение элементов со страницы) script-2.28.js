'use strict';

// DOM - Document Object Modal

const box = document.getElementById('box'); // найти элемент по айдишке. Он может быть только один
console.log(box);


const btns = document.getElementsByTagName('button'); // мы получаем не один элемент, а псевдомассив. Помним что псевдомассив не содержит стандартных методов.
console.log(btns); // мы получаем хтмл коллекцию псевдоэлементов

// способ 1. чтобы получить определённую кнопку 
const btns2 = document.getElementsByTagName('button')[1]; // чтобы получить определённую кнопку, нужно указать индекс

// способ 2. чтобы получить определённую кнопку
const btns3 = document.getElementsByTagName('button');
console.log(btns[1]);

// Если у нас будет только 1 элемент, и мы будем его искать с помощью метода getElementsByTagName, то всё равно он будет хтмл коллекцией, не смотря на то, что он один




const circles = document.getElementsByClassName('circle'); // ищем по классу
console.log(circles); // тут тоже будет именно хтмл коллекция

// --------------------------------------------------------
// Более современные и функциональные методы

const hearts = document.querySelectorAll('.heart'); // мы тут говорили что псевдомассивы не имеют методов и по сути ничего не умеют, так вот querySelectorAll исключение!!! у него есть метод forEach
hearts.forEach(item => {
  console.log(item);
}); // Используем метод forEach и выводим все .heart


const oneHeart = document.querySelector('.heart'); // выводит только первый элемент на странице
console.log(oneHeart);
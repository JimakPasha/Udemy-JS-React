// Навигация по DOM - элементам, data - атрибуты, преимущество for/of
console.log(document.body); // мы можем обратиться к бади
console.log(document.head); // можем head и тд.


console.log(document.documentElement); // получаем штмл со всем содержимым
console.log(document.body.childNodes); // тут ищем ноды(узлы) которые являются детьми у бади. Получаем псевдомассив (мы видем, что тут есть тексотовая нода, див враппер и тд). Текстовая нода это пробел или текст между тегом или в теге.


// Все элементы это узлы, но не все узлы элементы. Узлы это и элементы и переносы и текстовые элементы. А элементы это элементы (по сути теги)


// есть свойства, которые позволяют получить первого или последнего ребёнка
console.log(document.body.firstChild); // получим ноду текст
console.log(document.body.lastChild); // получим ноду текст


console.log(document.querySelector('#current').parentNode); // получим div с классом first

// но если нужно получить родителя родителся то делаем так:
console.log(document.querySelector('#current').parentNode.parentNode); // получим wrapper



// ----------------------------------------------------------------------------------------------------
// в штмл5 появилась такая возможность как date-****** (атрибут тега)
// date -****** (произвольное название после тире).

console.log(document.querySelector('[data-current="3"]')); // чтобы найти дата атрибут
console.log(document.querySelector('[data-current="3"].nextSibling')); // получаем следующую ноду
console.log(document.querySelector('[data-current="3"].previousSibling')); // получаем предыдущую ноду



// но тут везде мы получаем именно ноду, а если нам нужен именно элемент, то есть следующие свойства
console.log(document.querySelector('[data-current="3"].nextElementSibling')); // получаем следующую елемент
console.log(document.querySelector('[data-current="3"].previousElementSibling')); // получаем предыдущий елемент
console.log(document.querySelector('#current').parentElement); // получаем родительнский элменет
console.log(document.body.firstElementChild); // получаем первый элменет
console.log(document.body.lastElemtntChild); // получаем последний элменет



// console.log(document.body.childNodes); но тут такого функционала нет, чтобы обратьиться именно к элементу а не ноде, его создают вручную. Мы переберём циклом for of, но не с помощью forEach (не понял почему, вроде потому что в for of есть крутые методы break и continue).
for (let node of document.body.childNodes) {
  if (node.nodeName == '#text'){
    continue;
  }
  
  console.log(node);
}
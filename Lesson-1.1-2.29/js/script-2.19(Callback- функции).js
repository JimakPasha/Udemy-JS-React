'use strict'

// Callback - функции


// представим, что функция общается с сервером и у нас есть задержка, просто имитируем задержку с помощью метода setTimeout
function first() {
  // do something
  setTimeout(function () {  
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}


// мы вызываем функции в таком порядке, но выводятся они в другом из-за задержки, это значит, что не обязательно они выполнятся так, как в порядке действия, они запустятся в порядке, но выполнятся - зависит от условий
first();
second();

// Callback функция - функция которая должна быть выполнена после того, как другая функция завершит своё выполнение

function learnJS(lang, callback) {
  console.log(`Learn: ${lang}`);
  callback();
}

learnJS('JS', function() {
  console.log('Я прошёл этот урок!'); // это анонимная функция, она после выполнения как бы пропадёт
});


// вариант 2 но уже не с анонимной функцией

function done() {
  console.log('Я прошёл этот урок!');
}

learnJS('JS', done); // но done без скобок, как обычно это бывает. Потому что мы туда передали просто функцию. Мы её не вызываем, а передаём, чтобы она в дальнейшем когда-то была использована
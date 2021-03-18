'use strict';

// Объекты, деструктуризация объектов(ES6)


// представь что эта константа с объектом и внутренностями объекта это шкаф, где шкаф это константа с названием, а внутренности это объект со своими свойствами и значениями

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

console.log(options.name);

delete options.name; // этим методом можно удалить свойство из объекта

console.log(options);



// переберём наши вещи в шкафу
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

// приём счётчика. Узнать кол-во свйоств в объекте. Но это долговато, поэтому есть вариант с методом, который ниже

let counter = 0;
for (let key in options) {
  counter++;
}

console.log(counter);

// вариант с методом 

console.log(Object.keys(options));

// т.к. метод кейс преобразовывает в массив, а массив мы можем посчитать с помощью length

console.log(Object.keys(options).length);



// Методы (это действия которые умеют объекты) мы можем создавать сами, вручную

const options2 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  // создаём сами метод (метод объекта)
  makeTest: function () {
    console.log('Test');
  }
};

// и запускаем наш метод
options2.makeTest();



// деструктуризация объектов. Это нужно что бы в объектах доставать вложенные объекты проще. 

const options3 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};

const {border, bg} = options3.colors; 
console.log(border);
// это и есть деструктуризация


// Не по теме
// А откуда же у нас методы у обычной строки? JS сводит всё к объектам. JS это объектно орентированный язык и все сущности которые в нём есть, сводяться к объектам, а ещё правильней прототипно-ориентированный язык.
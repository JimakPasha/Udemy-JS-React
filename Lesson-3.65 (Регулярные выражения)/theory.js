'use strict';
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Краткая выжимка

// методы строк:
// search (получаем позицию) строка28
// match (получаем массив) стр48
// replace (заменяет) стр54
// метод только регулярного выражения 
// test (получим тру или фолс) стр66

// Флаги: стр44
// 1) i (найти что-то вне зависимости от регистра)
// 2) g (global - когда пытаемся найти сразу несколько вхождений)
// 3) m (многострочный режим, если у нас строки могут быть с переносами)

// Классы: стр80
// \d (digets -цифры)
// \w (word - слова - буквы)
// \s (space - пробелы)

// Не классы:
// такие же, только заглавные буквы

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Подробно
// Регулярные выражения (технология) позволяют легко работать со строками. Удалять, заменять части слов, искать слова, ограничивать ввод и тд. Это используется во всех языках

// Регулярные выражения состоят из 2ух частей: 
// 1) Патерн(Патерн - шаблон.Шаблон того, что мы ищем в этой строке или что пытаемся удалить и тд.Т.е. как-то ограничиваем список символов либо их порядок.)
// 2) Флаги

// есть несколько способов, как их создавать
// - с помощью конструкутора
// new RegExp ('pattern', 'flags'); // RegularExpression. Но таким созданием никто не пользуется, потому что есть более короткий
// /patern/flags

const ans = prompt('Ввудите ваше имя');
// допустим, мы хотим полчить все маленькие буквы н
const reg = /n/; //пишем патерн - т.е. шаблон того, что будем искать
console.log(ans.search(reg)); // search метод строки
// зайдём в браузер, введём имя Ann и в ответе получим 1. 1 - это позиция с которой начинается буква n. Если введём имя в которой не будет этой буквы, то получим -1

// но допустим, мы хотим не только первую букву n, и не только маленькую, но и большую (если такие будут)
// для этого у нас есть флаги
// 3 классических флага:
// 1) i (найти что-то вне зависимости от регистра)
// 2) g (global - когда пытаемся найти сразу несколько вхождений)
// 3) m (многострочный режим, если у нас строки могут быть с переносами)
// флаги можно комбинировать и ставить сразу несколько
const ans1 = prompt('Ввудите ваше имя');

const reg1 = /n/i; 
console.log(ans.search(reg1));

// но! в методе search - флаг g - не работает

// метод match
const ans2 = prompt('Ввудите ваше имя');

const reg2 = /n/ig;
console.log(ans2.match(reg2)); // в этом методе мы уже получим массив (в массиве будет тот кусочек, который искали)

// метод replace
const pass = prompt('Password');

console.log(pass.replace(/./g, "*")); // этот метод служит для замены. Первая часть что меняем, вторая на что меняем
// /./ - это значит что все элементы. Тут мы берём все элементы и заменяем их на звёздочку.
// Но что если нам нужно заменить именно точку?  а не все символы(не использовать спец символ точки)? Ответ: Экранируем его. Что это значит? делаем так /\./
// вообще в регулярках много спецсимволов.
console.log('12-34-56'.replace(/-/g, ':')); // все дефисы меняем на двоеточие

// однако у регулярных выражений, есть свои методы. 
// метод test
const ans3 = prompt('Ввудите ваше имя');

const reg3 = /n/ig;
console.log(ans3.test(reg3)); // а есть ли у нас в строке что-то похожее на этот патерн. этот метод вернёт тру или фолс. Т.е. будет буква n - будет true, не будет буквы n - false.

// но часто мы хотим искать целые классы символов. Например все цифры, слова, пробелы. Поэтому в регулярных в. есть такое понятие Классы.
// Классы:
// \d (digets -цифры)
// \w (word - слова - буквы)
// \s (space - пробелы)
const ans4 = prompt('Ввудите ваше число');

const reg4 = /\d/;
console.log(ans4.match(reg4)); // тут мы будем выводить только число

// задание: из строки вывести только R2D2, используя регулярки
const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // получим в массиве R2D2


// Обратные классы. Иногда нам нужно найти не числа, не цифры, не пробелы
// разница лишь в том, что у не классов заглавная буква
// \D 
// \W
// \S 
console.log(str.match(/\D/ig));



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// в папке практика мы меняем

if (offset == +width.slice(0, width.length - 2) * (slides.length - 1))... // нам тут нужно у width отрезать наши пиксели, и мы улчшим код с помощью регулярки
if (offset == +width.replace(/\D/g, '') * (slides.length - 1))... // этот реплейс тут получше. 1) проще интуитивнее 2) а вдруг нам нужно отрезать не px, а какие-то единицы измерения, в которых 3 буквы

// далее в подобных местах в коде поменяем

// а потом мы написали функцию 
function deleteNotDigits(str) {
	return +str.replace(/\D/g, '');
}

// и это
+width.replace(/\D/g, '')
// заменили на вызов функции
deleteNotDigits(str)

'use strict';

// функц. генераторы используются в более продвинутых технологиях

//создаётя она так:
// такие функции выдают результат последовательно. Мы вызвали один раз, она отдала один результат, вызываем ещё раз, резултат другой. за этот функционал отвечает ключевое слово yield
function* generator() {
	yield 'S';
	yield 'c';
	yield 'r';
	yield 'i';
	yield 'p';
	yield 't';

}

const str = generator();

// чтобы вызвать следующий шаг нашего генератора, нужно использовать встроенный метод next
console.log(str.next());
console.log(str.next().value); // обратится только к значению
console.log(str.next().done); // и к done можем обратиться
// когда функция срабатывает, она отдаёт объект, и у него два поля
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
// когда yield закончится, то в объекте мы будем получать underfined и done в позиции true

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ещё один пример
function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);




// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// с нашим генератором хорошо работает for of

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

for (let k of count(7)) {
	console.log(k);
}

// эта конструкция запустит столько раз какое значение в count
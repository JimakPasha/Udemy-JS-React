// скрытие от внешнего мира переменных, функций и прочего - называется инкапсуляция. 
// в ООП это значит, что объект хранит своё состояние в приватном порядке, и только методы объекта имеют доступ.
// Для чего это? 
// 1)Юзер не сможет влезть и что-то там сломать
// 2) мы можем без последствий влазить и что-то менять и улучшать в программе
// 3) Это удобно, когда внутренности скрыты, а мы используем её результат

// Пример с помощью старого синтаксиса.

function User(name, age) {
	this.name = name;
	this.age = age;

	this.say = function() {
		console.log(`Username is ${this.name}, and hi/she ${this.age} year old`);	
	}

}

const ivan = new User('Ivan', 30);

console.log(ivan.name);
console.log(ivan.age);
ivan.say();


ivan.name = 'Jo';
ivan.age = 50;
console.log(ivan.name);
console.log(ivan.age);
ivan.say();

// тут у нас ко всему есть доступ, можем менять что угодно. но допустим нам нужно сокрыть доступность менять возраст

function User(name, age) {
	let userName = name; // во первых имя положим в переменную
	this.age = age;

	this.say = function () {
		console.log(`Username is ${userName}, and hi/she ${this.age} year old`);
	}

}

const ivan = new User('Ivan', 30);

console.log(ivan.userName); // теперь мы не имеем доступа даже посмотреть, не то, чтобы даже изменить имя
console.log(ivan.age);
ivan.say();

ivan.userName = 'Jo';
console.log(ivan.userName); // как будто поменять, но если посмотреть на следующую функцию, то имя не изменилось
ivan.say();

// а теперь как всё же получить доступ? с помощью гет и сет
// гет просто чтобы (посмотреть) получить доступ к значению
// сет, чтобы менять значение
function User(name, age) {
	let userName = name; // во первых имя положим в переменную
	this.age = age;

	this.say = function () {
		console.log(`Username is ${userName}, and hi/she ${this.age} year old`);
	}

	this.getName = function() {
		console.log(userName);
		return userName;
	}

	this.setName = function (name) {
		userName = name;
	}

}


const ivan = new User('Ivan', 30);

ivan.getName();
ivan.setName('Jo');
ivan.getName();
ivan.say();


// ------------------------------------------------------------------------------------------------------------------------
// перепишем всё на классах
// тут не всё так просто, тут нам понадобятся гетторы и сетторы из прошлого урока

class User {

	constructor(name, age) {
		this._name = name; // _ это лодыш, мы просто сообщаем другим разрабам, что это свойство должно быть скрыто. это не синтаксис языка
		this.age = age;
	}
	
	say() {
		console.log(`Username is ${this._name}, and hi/she ${this.age} year old`);
	}

	// тут создаём те самые гетторы и сетторы
	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

}


const ivan = new User('Ivan', 30);

console.log(ivan.name);
ivan.name = 'Jo';
console.log(ivan.name);
ivan.say();

// но у такого синтаксиса есть сво минусы
// вредные программисты, могут подставить тут нижнее подчёркивание
console.log(ivan._name);
ivan._name = 'Jo';
console.log(ivan._name);
ivan.say();
// вроде бы тоже самое, но мы тут обращаемся напрямую, и обходим гетторы и сетторы стороной, это не правильный подход. Что с этим можно сделать???

// ------------------------------------------------------------------------------------------------------------------------************************
// недавно появилась возможность использовать поля классов. Это пока эксперементальный синтаксис, но скорее всего он станет стандартом. Работает только в Хроме.
// с помощью этого синтаксиса легко создавать приватные свойства классов

class User {

	constructor(name, age) {
		this._name = name;
		this.age = age;
	}

	surname = 'Sidorov';
	#surname222 = 'Sidorov222';
	// этот эксперементальный синтаксис позволяет создавать свойства вне конструктора. это круто записывать то, что не будет меняться. А что бы сделать его приватным, то нужно прописать #

	// также можно использовать тут стрелочную функцию (я не совсем это понял)
	say = () => {
		console.log(`Username is ${this._name} ${this.surname},${this.#surname222}  and hi/she ${this.age} year old`);
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

}


const ivan = new User('Ivan', 30);


console.log(ivan.surname222); // получим underfined. А если поставим решётку# ? Ничего не получим, т.к. это уже хоть и эксперементальный, но синтаксис языка
console.log(ivan.surname); // а тут и вовсе ошибку
ivan.say();

// ------------------------------------------------------------------------------------------------------------------------// ------------------------------------------------------------------------------------------------------------------------// ------------------------------------------------------------------------------------------------------------------------
// ДЗ. Написать геттер и сеттер к нашему приватному свойству #surname222

class User {

	constructor(name, age) {
		this._name = name;
		this.age = age;
	}

	#surname = 'Ivanov';

	say = () => {
		console.log(`Username is ${this._name} ${this.#surname}  and hi/she ${this.age} year old`);
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	get surname() {
		return this.#surname;
	}

	set surname(surname) {
		this.#surname = surname;
	}

}


const ivan = new User('Ivan', 30);

console.log(ivan.surname);
ivan.surname = 'newSurname';
console.log(ivan.surname);

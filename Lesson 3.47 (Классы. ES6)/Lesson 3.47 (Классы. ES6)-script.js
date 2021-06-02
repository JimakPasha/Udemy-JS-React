'use strict';
// Lesson 3.47 Классы.ES6

// классы появились в стандарте ecmaScript2015 (ES6)
// классы это красивая обёртка функций-конструкторов. Ещё называют синтаксический сахар

// мы создаём шаблон, прототип, который будет много где использоваться на сайте, и мы его будем только дополнять

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	calcArea() { // создаём метод
		return this.width * this.height;
	}
}

const square = new Rectangle(10, 10); // теперь в этой переменной есть объект у которго два свойства, и метод, который перемножает эти свойства
const long = new Rectangle(100, 20);

console.log(square.calcArea());
console.log(long.calcArea());


// принципы ООП
// 1) когда мы концепцию отделяем от её экзэмпляра (этот метод мы соблюли)
// 2) наследование - способность объекта или класса базироваться на другом объекте или классе. Это главный механизм для использования повтороного кода. Ниже пример

// мы создаём класс, но знаем, что у него будет всё тоже самое, что и у нашего класса Rectangle. Для этого мы можем сделать наследоваемость (extends Rectangle)
class ColoredRectangleWidthText extends Rectangle {
	constructor(width, height, text, bgColor) {
		// мы понимаем что надо записать это:
		// this.width = width;
		// this.height = height;
		// но этих свойств может быть очень много, поэтому используем метод:
		super(width, height); // вызывает суперкоструктор родителя, т.е. того от кого наследуется. !!! super - всегда должен быть на первом месте в конструкторе !!! Во внутрь super можем прописать только те свойства которые нам нужно например только super(height); через запятую.
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWidthText(10, 25, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea()); // метод наследуется от родителя


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Урок от Владилена Минина

class Animal {
	static type = 'ANIMAL'; // статик будет работать только у самого Анимал. (Animal.type)

	constructor(options) {
		this.name = options.name,
		this.age = options.age,
		this.hasTail = options.hasTail
	}
	voice() {
		console.log('I am animal!');
	}
}

const animal = new Animal({
	name: 'Animal',
	age: 5,
	hasTail: true
});


// классы позволяют наследоваться
class Cat extends Animal {
	static type = 'CAT';

	constructor(options) {
		super(options); // у конструкторов дочерних классов обязательно первым вызывать метод супер
		this.color = options.color
	}

	voice() {
		super.voice(); // иногда нам нужен родительский метод
		console.log('I am cat!');
	}

	get ageInfo() {
		return this.age * 7;
	}

	set ageInfo(newAge) {
		this age = newAge;
	}

}

const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true,
	color: 'balck'
});


// ----------------------------------------------

class Components {
	constructor(selector) {
		this.$el = document.querySelector(selector);// через $ обычно называются такие переменные, которе содержат дом.ноду
	}

	hide() {
		this.$el.style.display = 'none';
	}

	show() {
		this.$el.style.display = 'block';
	}
}


class Box extends Components {
	constructor(options) {
		super(options.selector);

		this.$el.style.width = this.$el.style.height = options.size + 'px';
		this.$el.style.background = options.background;
	}
}

const box1 = new Box({
	selector: '#box1',
	size: 100,
	color: 'red'
});

const box2 = new Box({
	selector: '#box2',
	size: 120,
	color: 'blue'
});

class Circle extends Box {
	constructor(options) {
		super(options);

		this.$el.style.borderRadius = '50%';
	}
}

const c = new Circle({
	selector: '#circle',
	size: 90,
	color: 'green'
});
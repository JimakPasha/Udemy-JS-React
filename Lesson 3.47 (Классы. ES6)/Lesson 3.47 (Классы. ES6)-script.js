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
		super(); // вызывает суперкоструктор родителя, т.е. того от кого наследуется. !!! super - всегда должен быть на первом месте в конструкторе !!! Во внутрь super можем прописать только те свойства которые нам нужно например только super(height); через запятую.
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
	}
}

const div = new ColoredRectangleWidthText(10, 25, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea()); // метод наследуется от родителя
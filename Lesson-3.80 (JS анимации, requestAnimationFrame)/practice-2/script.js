const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let position = 0; // эту переменную мы сделаем в глобальной видимости


function myAnimation() {
	position++;
	elem.style.top = position + 'px';
	elem.style.left = position + 'px';

	if (position < 300) {
		requestAnimationFrame(myAnimation);
	}
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// остановим нашу анимацию
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
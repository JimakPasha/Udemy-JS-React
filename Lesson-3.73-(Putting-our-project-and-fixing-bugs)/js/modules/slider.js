function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

	let slideIndex = 1;
	let offset = 0;

	const slides = document.querySelectorAll(slide),
		slider = document.querySelector(container),
		prevBtnSlide = document.querySelector(prevArrow),
		nextBtnSlide = document.querySelector(nextArrow),
		totalSlide = document.querySelector(totalCounter),
		currentSlide = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width;

	if (slides.length < 10) {
		totalSlide.textContent = `0${slides.length}`;
		currentSlide.textContent = `0${slideIndex}`;
	} else {
		totalSlide.textContent = slides.length;
		currentSlide.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';


	slides.forEach(slide => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	const dots = document.createElement('ol'),
		dotsArr = [];
	dots.classList.add('carousel-dots');
	dots.style.cssText = `
		position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
	`;
	slider.append(dots);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.style.cssText = `
		  box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 6px;
			margin-right: 3px;
			margin-left: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: .5;
			transition: opacity .6s ease;
		`;
		if (i == 0) {
			dot.style.opacity = 1;
		}
		dots.append(dot);
		dotsArr.push(dot);
	}

	nextBtnSlide.addEventListener('click', () => {
		if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			currentSlide.textContent = `0${slideIndex}`;
		} else {
			currentSlide.textContent = slideIndex;
		}

		dotsArr.forEach(dot => dot.style.opacity = '.5');
		dotsArr[slideIndex - 1].style.opacity = 1;
	});

	prevBtnSlide.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1)
		} else {
			offset -= +width.slice(0, width.length - 2);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			currentSlide.textContent = `0${slideIndex}`;
		} else {
			currentSlide.textContent = slideIndex;
		}

		dotsArr.forEach(dot => dot.style.opacity = '.5');
		dotsArr[slideIndex - 1].style.opacity = 1;
	});

	dotsArr.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = +width.slice(0, width.length - 2) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				currentSlide.textContent = `0${slideIndex}`;
			} else {
				currentSlide.textContent = slideIndex;
			}

			dotsArr.forEach(dot => dot.style.opacity = '.5');
			dotsArr[slideIndex - 1].style.opacity = 1;

		});
	});

}

export default slider;
Урок для расширения кругозора
Библиотека - это маленький участок кода, либо целый большой ресурс, который решает определённую проблему. Основное то, что это готовое решение.

Подключать их можно несколькими способами. 
С помощью npm
 помощью cdn

 Когда подключаем через библиотеку, то помещаем её перед нашим главным скриптом

 библиотека axios помогает работать с сервером. В неё завёрнуто много доп возможностей.

 В нашем проекте перепишем некоторые штуки с учётом библиотеки axios
axios.get('http://localhost:3000/menu')
	.then(data => {
		data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		});
	});
	получается нам не нужно благодаря этой библиотеки делать функцию, а вставить axios, там уже всё это встроено
const requestURL = 'https://jsonplaceholder.typicode.com/users';

// создаём
const xhr = new XMLHttpRequest();

// открываем
xhr.open('GET', requestURL);
// Первый аргумент:
// GET - получение
// POST - отправка
// DELETE - удаление
// PUT - полное обновление элменета
// PATCH - частичное обновление элменета

// Второй аргумент:
// Наш URL откуда ГЕТИМ, или куда ПОСТИМ 

// получим данные
xhr.onload = () => {
	console.log(xhr.response); // посмотрев, мы поймём, что это строка, и см ниже как сделать из этого объект
}
xhr.onload = () => {
	if (xhr.status >= 400) { // для обработки нетворк ошибок
		console.error(xhr.response);
	} else {
		console.log(JSON.parse(xhr.response)); // можно так
	}
}
// либо можно просто сказать, что хотим респонс(ответ) в виде json
// xhr.responseType = 'json'; - указать это выше строки 19 и тогда уже не парсить json

//обработаем ошибку 
xhr.onerror = () => {
	console.log(xhr.response); // для проверки можно сломать url в слыше users
}

// отправляем
xhr.send();
// отправили. ( если не отправили пердыдущим действием респонс, то можно чтобы увидеть в консоли что отправилось переходим в DevTools - Network - XHR - Headers)


// это всё круто. но в следующем скрипте обернём это всё в промис 
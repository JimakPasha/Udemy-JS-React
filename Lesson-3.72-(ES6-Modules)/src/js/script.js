import {one, two} from './main.js';

console.log(`${one} and ${two}`);


// мы прям тут можем вот что сделать
// т.е. мы тут переименовываем
// такое используют часто когда используют длинное название и нам его просто надо переименовтаь
import { three as third } from './main.js';

console.log(third);


// ещё одна плюшка это импортировать всё
import * as data from './main';
// тут мы всему дали название data, и теперь можем так обращаться
console.log(`${data.one} and ${data.two}`);
// т.е. в даном случае data это по сути объект в котором всё, что было экспортировано 

console.log(data);



// про экспорт по умолчанию
import sayBye from './main.js';
sayBye();
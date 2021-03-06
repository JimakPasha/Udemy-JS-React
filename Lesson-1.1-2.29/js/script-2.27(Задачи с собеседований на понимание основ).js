'use strict';

// Все задачи:

// •	Какое будет выведено значение: let x = 5; alert(x++); ?

// •	Чему равно такое выражение: [] + false - null + true ?

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// •	Чему равна сумма[] + 1 + 2 ?

// •	Что выведет этот код: alert("1"[0]) ?

// •	Чему равно 2 && 1 && null && 0 && undefined ?

// •	Есть ли разница между выражениями ? !!(a && b) и(a && b) ?

// •	Что выведет этот код: alert(null || 2 && 3 || 4); ?

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// •	Что выведет этот код: alert(+"Infinity"); ?

// •	Верно ли сравнение: "Ёжик" > "яблоко" ?

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?




// -------------------------------------------------------------------
// Решения

// 1)
// •	Какое будет выведено значение: let x = 5; alert(x++); ?
let x = 5; 
alert(x++);

// ответ 5. т.к. если инкремент стоит после, то x будет уже 6, но выведет ещё 5. Чтобы вывести 6, нужно поставить инкремент перед иксом

// 2)
// •	Чему равно такое выражение: [] + false - null + true ?
console.log([] + false - null + true);

// пойдём по порядку
console.log([] + false); // мы тут получим false - но строку!, тут слдедует знать, что пустой массив - это строка, а когда мы складывем строку с каким-то типом данных, то мы получим строку
console.log([] + false - null); // и тут мы получаем NaN - оно получается при выполнении не математических операций
console.log([] + false - null + true); // и тут ничего не измнится и мы получаем всё тот же NaN (и хоть это переводится как не число, но является числовым типом данных)


// 3)
// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y2 = 1; 
let x2 = y2 = 2;
console.log(x2); // ответ 2. тут стоит помнить, что мы имеем дело с простым типом данных, и тут передача идёт по значению. Помним, что если бы был объект, то передача была бы по ссылке


// 4)
// •	Чему равна сумма[] + 1 + 2 ?
console.log([] + 1 + 2); // ответ 12 (строка). Т.к. пустой массив это строка, и когда мы к строке прибавляем число, то число преобразуется(конкатинируется) в строку, итого [] + 1 = '1', '1' + 2 (преобразуется в строку и получается '1' + '2' = '12') 


// 5)
// •	Что выведет этот код: alert("1"[0]) ?
console.log('1'[0]); // ответ 1. тут фишка в том что у нас есть строка 1, а в квадратных скобках выведен индекс этой строки. Просто следует помнить что у строки есть индекс, и его можно запросит таким способом.


// 6)
// •	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); // ответ null. Разберём почему. Дело в том что && всегда зпинается на false, и выводит значение того, кто дал этот false. И т.к. 2 и 1 это true, a null это false, он запнулся на null и вывел нам его.


// 7)
// •	Есть ли разница между выражениями ? !!(a && b) и(a && b) ?
// Ответ нет.

console.log(!!(1 && 2) === (1 && 2)); // т.к. !! делает то, что в скобках в булиновый тип, то естественно он не равняется



// 8)
// •	Что выведет этот код: alert(null || 2 && 3 || 4); ?
console.log(null || 2 && 3 || 4); // ответ 3. Сначала мы должны понять какой логичекий оператор слеудет выполнять первее, поэтому мы гуглим приорететы операторов js. выясняем, что у && приоретет выше и мы его выполняем первым. 2 && 3 даёт нам true и в 2 и в 3, и т.к. последний 3, то тут будет 3. Далее выполняем null || 3 , и тут следует знать, что || запинается на правде(true) а дальше не идёт, поэтому ответ 3.



// 9)
// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const aa = [1, 2, 3]; 
const bb = [1, 2, 3];
console.log(aa == bb); // ответ false. т.к. это две рзные переменные, они просто содержат одинаковую информацию, но это не значит что они равны


// 10)
// •	Что выведет этот код: alert(+"Infinity"); ?
console.log(+'Infinity'); // выведет  Infinity, но не строку, а число инфинити, т.к. перед строкой стоит +, а он преобразовывает в число. 


// 11) 
// •	Верно ли сравнение: "Ёжик" > "яблоко" ?
console.log('Ёжик' > 'яблоко'); // ответ false. строки js может сравнивать, и он их сравнивает по первым буквам, если они равны, то по вторым и тд. Каждая буква имеет свой юникод (вроде как чем дальше к концу алфавита тем больше значение, вот и получается что яблоко всё же больше ёжика)



// 12)
// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); // ответ 2. Мы знаем, что ||(или) запинается на правде и выводит её. И начинаем 0 или пустая строка, и там и там фолс, дальше пустая строка(фолс) или 2(тру). Тру! Запнулись на правде, знаичт её и выводим. А дальше код просто не пойдёт.
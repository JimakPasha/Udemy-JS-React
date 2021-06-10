/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "two": () => (/* binding */ two),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "three": () => (/* binding */ three),
/* harmony export */   "four": () => (/* binding */ four),
/* harmony export */   "five": () => (/* binding */ five),
/* harmony export */   "default": () => (/* binding */ sayBye)
/* harmony export */ });
// новая более гибкая модульная структура es6 стандарта

// самое важное в таких экспортах, чтобы у каждой было своё имя (именованный экспорт)

// можно так
let one = 1;


//можно так
let two = 2;



function sayHi() {
	console.log('Hello');
}

let three = 3;

let four = 4;

let five = 5;


// есть ещё такая штука, как экспорт по умолчанию. Он может быть только один
function sayBye() {
	console.log('Bye');
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Редкая штука
// ещё есть такая фича - тайпМодуль, который мы можем применить к тайпу Скрипт. Т.е. это как без билда подключать наши модули(вдруг пригодится). 

// сделаем в нашем файде хтмл так
// 	< script type = "module" src = "./js/main.js" ></ >
// 		<script type="module" src="./js/script.js"></script>
// это не значит, что наш браузер соберет скрипты, напомню, что он это делать не умеет, он просто последовательно их подключит.
// стоит понимать, что когда мы подключаем скрипты через type=module, они работают так как defer
// и плюс к этому всему нужно немного точнее прописывать пути в наших импортах
// вот так
//import {one, two} from './main';

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");


console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`);


// мы прям тут можем вот что сделать
// т.е. мы тут переименовываем
// такое используют часто когда используют длинное название и нам его просто надо переименовтаь


console.log(_main_js__WEBPACK_IMPORTED_MODULE_0__.three);


// ещё одна плюшка это импортировать всё

// тут мы всему дали название data, и теперь можем так обращаться
console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`);
// т.е. в даном случае data это по сути объект в котором всё, что было экспортировано 

console.log(_main_js__WEBPACK_IMPORTED_MODULE_0__);



// про экспорт по умолчанию

(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
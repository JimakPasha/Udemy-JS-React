// Сейчас эра мобилок, и нужно знать какие события мб на мобиле. Та месть тач, и даже нескольких пальцев - т.к. поддерживается мультитач

// события на мобилах
// 1) touchstart - просто касание
// 2) touchmove - когда мы коснулись и палец движется
// 3) touchend - как только палец оторвался от элемента
// 4) touchenter - когда мы коснулись, палец движется и мы дотронулись до элемента на который повешено это событие
// 5) touchleave - когда мы коснулись, палец движется и мы дотронулись до элемента на который повешено это событие, а потом палец ушёл за пределы этого элемента
// 6) touchcancle - когда точка прикоснавение больше не регистрируется на поверхности. Например мы можем сёрфить, и наш палец выйдет за пределы браузера


window.addEventListener('DOMContentLoaded', () => {



  const box1 = document.querySelector('.box-1');

  box1.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start touchstart');
  });



  const box2 = document.querySelector('.box-2');

  box2.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log('Start touchmove');
  });



  const box3 = document.querySelector('.box-3');

  box3.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('Start touchend');
  });



});




// существуют 3 главных свойства при работе сенсорных устройств

// 1) touches - если хотим получить список всех пальцев, которые находятся на экране

const box4 = document.querySelector('.box-4');

box4.addEventListener('touchstart', (e) => {
  e.preventDefault();

  console.log('!');
  console.log(e.touches); // появляется тачЛист в консоле
});

// 2) пальцы которые взаимодействуют с конкретным элементом - targetTouches

const box5 = document.querySelector('.box-5');

box4.addEventListener('touchstart', (e) => {
  e.preventDefault();

  console.log('!');
  console.log(e.targetTouches);
});

// 3) changeTouches - список пальцев, которые учствуют в текущем событии. Например: если это событие тачЕнд, то список будет содержать палец, который был убран, даже если остальные 4 пальца у нас до сих пор на экране. Т.е. это пальцы которые уже совершили определённое назначенное действие




// ПРИМЕР
const box6 = document.querySelector('.box-6');

box6.addEventListener('touchstart', (e) => {
  e.preventDefault();

  console.log(e.targetTouches[0].pageX); // тут отслеживаем координаты первого пальца, и можем взаимодействовать, например в слайдере, когда будет выходить за координаты, то слайд будет меняться. 
  // На первом этапе это не чатсо применимо, чаще используют готовые решения - библиотеки, они весят мало, но не требуют запары сильной на первых этапах
});
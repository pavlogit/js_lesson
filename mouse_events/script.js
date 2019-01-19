//переменные
let dbl = document.querySelector('.ondblclick');
let context = document.querySelector('.oncontextmenu');
let dockbody = document.querySelector('html');
let enterLeave = document.querySelector('.onmouseenterleave');
let imgClose = document.querySelector('.change-img');
let block1 = document.querySelector('.color1');
let block2 = document.querySelector('.color2');
let block3 = document.querySelector('.color3');
let block4 = document.querySelector('.color4');
let r = 0;
let g = 0;
let b = 0;

//события
dbl.ondblclick = dblClick;
dbl.onmousedown = mouseDown;
// dbl.ondblclick = clearSelection();
context.oncontextmenu = noContext;
dockbody.oncontextmenu = noContext;
enterLeave.onmouseenter = changeImgOpen;
enterLeave.onmouseleave = changeImgClose;
// r = randomR();
// g = randomG();
// b = randomB();
block1.onmouseenter = changeColor1;
block2.onmouseenter = changeColor2;
block3.onmouseenter = changeColor3;
block4.onmouseenter = changeColor4;
//на блок с классом .ondblclick вешается событие (по двойному нажатию на блок срабатывает функция, которая выводит в консоль 'click2'/при двойном нажатии оказия - выделяется текст)
function dblClick () {
  console.log('Двойной клик');
}

//избавление от оказии, текст не выделяется при двойном клике (ВАРИАНТ 1)
function mouseDown() {
  return false;
}
//(ВАРИАНТ 2)
// function clearSelection () {
//   if(window.getSelection) {
//     window.getSelection().removeAllRanges();
//   }
// }

//перехватываем контекстное меню
function noContext () {
  console.log('Контекстное меню');
  return false;
}

//меняем фон и содержимое блока при наведении на него
function changeImgOpen () {
  imgClose.style.background = ('url(img/open.png) center no-repeat')
  console.log('Открыто');
  imgClose.innerHTML = ('Открыто');
}

//меняем фон и содержимое блока при выходе за его область
function changeImgClose () {
  imgClose.style.background = ('url(img/close.png) center no-repeat')
  console.log('Закрыто');
  imgClose.innerHTML = ('Закрыто');
}

// function randomR () {
//   return Math.floor(Math.random() * (255 + 1));
// }

// function randomG () {
//   return Math.floor(Math.random() * (255 + 1));
// }

// function randomB () {
//   return Math.floor(Math.random() * (255 + 1));
// }


//меняем цвет фона блокам при наведении на них курсора
function changeColor1 () {
  block1.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ')';
}

function changeColor2 () {
  block2.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ')';
}

function changeColor3 () {
  block3.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ')';
}

function changeColor4 () {
  block4.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ', ' + Math.floor(Math.random() * 256 - 0.5) + ')';
}
// console.log(r, g, b,);
console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
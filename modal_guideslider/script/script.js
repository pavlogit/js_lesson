let modal = document.querySelector('.modal');
let prNum = Math.round((Math.random() * 10) + 1);
console.log('Загаданное число:' + prNum);

document.querySelector('#random-check').onclick = function() {
  let randomNum = document.querySelector('#random-num').value;
  let randomOut = document.querySelector('#random-out');

  document.querySelector('#random-num').value = '';
  randomNum = parseInt(randomNum);

  if (!isNaN(randomNum)) {
    if (randomNum < prNum) {
      randomOut.innerHTML = 'Загаданное число больше. Попробуйте ещё раз';
    }
    else if (randomNum > prNum) {
      randomOut.innerHTML = 'Загаданное число меньше. Попробуйте ещё раз';
    }
    else if(randomNum == prNum) {
      randomOut.innerHTML = 'Верно';
      prNum = Math.round((Math.random() * 10) + 1);
      console.log('Загаданное число:' + prNum);
    }
  }
  else {
    randomOut.innerHTML = 'Введите число';
  }
}

//-----------------------------------------------------------------------------------

let borderChange = document.querySelector('#border-change');

borderChange.oninput = function() {
  let object = document.querySelector('#test');
  object.style.borderRadius = this.value + 'px';
  console.log('Border-radius:' + this.value + 'px');
}

//-----------------------------------------------------------------------------------

let block1 = document.querySelector('.color1');
let block2 = document.querySelector('.color2');
let block3 = document.querySelector('.color3');
let block4 = document.querySelector('.color4');

block1.onmouseenter = function () {block1.style.background = randomBgColor();}
block2.onmouseenter = function () {block2.style.background = randomBgColor();}
block3.onmouseenter = function () {block3.style.background = randomBgColor();}
block4.onmouseenter = function () {block4.style.background = randomBgColor();}

function randomBgColor() {
  return 'rgb(' + random256() + ',' + random256() + ',' + random256() +')';
}

function random256() {
  return  Math.round((Math.random() * 256 - 0.5));
}

//-------------------------------------------------------------

let color = document.querySelector('.input-color');
let magicBtn = document.querySelector('.magic-btn');
let realBtn = document.querySelector('.real-btn');
magicBtn.onclick = function() {
  modal.style.background = color.value;
  console.log('Выбранный цвет' + color.value);
}

realBtn.onclick = function() {
  modal.style.background = '#E7E7E7';
}


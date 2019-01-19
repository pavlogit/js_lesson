let color = document.querySelector('.input-color');
let magicBtn = document.querySelector('.magic-btn');
let realBtn = document.querySelector('.real-btn')

//меняем значение свойства background в body на значение выбранное в input type=color по нажатии на кнопку
magicBtn.onclick = function () {
  document.body.style.background = color.value;
}

//по нажатию на кнопку присваиваем значение none свойству background
realBtn.onclick = function () {
  document.body.style.background = ('none');
}
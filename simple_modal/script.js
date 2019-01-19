//переменные
let popup = document.querySelector('.popup');
let show = document.querySelector('.show-btn');
let hide = document.querySelector('.hide-btn');

//по нажатию на кнопку, которая находится в переменной show, к popup прибавляется класс show, в котором значение display: flex
show.onclick = function () {
  popup.classList.add('show');
}

//по нажатию на кнопку, которая находится в переменной hide, в popup удаляется класс show и прибавляется класс hide, в котором значение display: none
hide.onclick = function () {
  popup.classList.remove('show');
  popup.classList.add('hide');
}

//то же что и выше, только по нажатию клавиши esc
document.onkeydown = function (e) {
  if(e.keyCode == 27) {
    popup.classList.remove('show');
    popup.classList.add('hide');
  }
}

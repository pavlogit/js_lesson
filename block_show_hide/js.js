let btn = document.querySelector('#btn');
//получаем в переменную showModal - значение кнопки с id='show-modal'
let showModal = document.querySelector('#modal-show');
let hideModal = document.querySelector('#modal-hide');
let styleModal = document.querySelector('#modal-style');
//делаем для функций глобальную переменную (modal). 
//При выполнении функции программа сначала ищет переменную в функции(локальную), 
//если её нет - переходит к просмотру глобальных переменных
let modal = document.querySelector('.modal');

hide();//при загрузки страницы вызывает функцию show(), которая автоматически скрывает блок

function show() { //функция которая показывает окно
  modal.hidden = false;//для свойства блока (hidden) - присваиваем значение (false), блок становится видимым 
  modal.style.borderRadius = '10%'; //так же при срабатывании этой функции свойства будут приходить в тот вид,
  modal.style.border = '1px solid red'; // в котором они были изначально
}

function hide() {//функция, которая скрывает окно
  modal.hidden = true;//для свойства блока (hidden) - присваиваем значение (true), блок скрывается
}

function changeStyle() {//функция, при срабатывании которой изменяются стили блока
  modal.style.borderRadius = '20px';
  modal.style.border = '5px solid red';
}

function reload() {//функция, которая перезагружает страницу
  location.reload();
}

//вызов функции с именем (show), при нажатии на кнопку с id="modal-show", которая присвоена переменной showModal
showModal.onclick = show;
hideModal.onclick = hide;
styleModal.onclick = changeStyle;
btn.onclick = reload;
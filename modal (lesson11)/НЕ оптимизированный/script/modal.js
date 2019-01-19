//получаем все кнопки с классом modal-show
//используем метод forEach, для того чтобы перебрать массив. он выполняет указанную функцию один раз для каждого эл-та в массиве 
//функция пишется внутри forEach
//element внутри функции говорит о том, что каждый элемент внутри массива будет попадать в функцию, которая внутри forEach
document.querySelectorAll('.modal-show').forEach(function(element){
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function(element){
  element.onclick = closeModal;
});

//ПРОШУ ОБРАТИТЬ ВНИМАНИЕ НА ЭТУ ОБЛАСТЬ. ПРИ ПОДКЛЮЧЕНИИ НИЖЕ ЗАКОММЕНТИРОВАННЫХ ДЕЙСТВИЙ - ОКНО ЗАКРЫВАЕТСЯ ПРИ КЛИКЕ В ЛЮБОЙ ОБЛАСТИ, В ТОМ ЧИСЛЕ И ПРИ НАЖАТИИ НА КНОПКИ, КОТОРЫЕ ОТВЕЧАЮТ ЗА ДРУГИЕ ДЕЙСТВИЯ

//для реализации возможности закрытия окна по клику на область обёртки модального окна
// document.querySelectorAll('.modal-wrap').forEach(function(element){
//   element.onclick = closeModalWrap ;
// });

document.onkeydown = function(event){
  if(event.keyCode == 27) {
    document.querySelectorAll('.modal-wrap').forEach(function(element){
      element.classList.add('hide');
      element.children[0].classList.add('hide');
    });
    return false;
  }
}

function showModal() {
  //присваиваем переменной значение, которое описывается так: (this-говорит о том, что выбран этот элемент, и операции проводятся над ним, dataset-свойство, в котором лежат все атрибуты data, которые есть у этого элемента в DOM, modal - обращение к определённому атрибуту data (data-modal)).
  let modalId = this.dataset.modal;
  //кнопка и модальное окно заранее связаны data атрибутом(у кнопки) и ID(у окна) (#sign-in). Поэтому при обращении сейчас к переменной, в которой лежит data атрибут кнопки, с помощью querySelector, мы получаем окно с этим ID!!!! И удаляем класс hide
  document.querySelector(modalId).classList.remove('hide');
  //у обёртки и у самого окна есть класс hide, мы сейчас удалили его только у окна, потому что только у него есть id который нам нужен, родитель же осталься с hide.
  //получаем родителяи и так же удаляем класс hide
  document.querySelector(modalId).parentElement.classList.remove('hide');

  document.onkeydown = null;
}

function closeModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.add('hide');
  document.querySelector(modalId).parentElement.classList.add('hide');
  document.onkeydown = null;
}

//для реализации возможности закрытия окна по клику на область обёртки модального окна
function closeModalWrap() {
  //this-говорит о том, что выбран этот элемент, и операции проводятся над ним, classList - обращение к списку классов, add('hide') - добавление в список классов этого элемента, класса .hide
  this.classList.add('hide');
  //при выполнении действия выше, класс .hide присваивается только элементу, который мы выбрали, но для самого модального окна нужно тоже добавить класс .hide (иначе будут проблемы, потому что классы убираются и добавляются равнозначно в двух функциях которые выше). Обращаемся к детям, в массиве с детьми 1 элемент.
  this.children[0].classList.add('hide');
  document.onkeydown = null;
}

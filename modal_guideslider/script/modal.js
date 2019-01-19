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

//для реализации возможности закрытия окна по клику на область обёртки модального окна
document.querySelectorAll('.close-wrap').forEach(function(element){
  element.onclick = closeModal;
});

function showModal() {
  //присваиваем переменной значение, которое описывается так: (this-говорит о том, что выбран этот элемент, и операции проводятся над ним, dataset-свойство, в котором лежат все атрибуты data, которые есть у этого элемента в DOM, modal - обращение к определённому атрибуту data (data-modal)).
  let modalId = this.dataset.modal;
  //кнопка и модальное окно заранее связаны data атрибутом(у кнопки) и ID(у окна) (#sign-in). Поэтому при обращении сейчас к переменной, в которой лежит data атрибут кнопки, с помощью querySelector, мы получаем окно с этим ID!!!! И удаляем класс hide
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
    if(event.keyCode == 27) {
      closeModal ();
    }
  } 
}

function closeModal() {
  //проходится по всем оболочкам открытых окон и удаляет у них класс hide
  document.querySelectorAll('.modal-wrap').forEach(function(element){
    console.log(element);
    element.classList.add('hide'); 
  });
  document.onkeydown = null; 
}
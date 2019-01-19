//выпадающие списки
let select = document.querySelector('#select-1');

//при изменении в выборе выподающего списка срабатывает функция
select.onchange = function(){
  //выводит в консоль value выбранного значения
  console.log(select.value);
}

let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');

sendForm.onclick = function(event){
  //метод для отмены действия браузера(в данном случае при клике на кнопку страница не будет перезагружаться и в консоль будет выводится результат работы функции serialize)
  event.preventDefault();
  console.log(serialize(form));
}

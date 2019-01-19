let color = document.querySelector('#user-color');

function chips(message, timeremove = 3000, color = '#ff0000') { //в es6  можно задать параметр по умолчанию

  //позваляет создать элемент страницы, но не вствляет его внутрь страницы
  let chips = document.createElement('div');
  chips.classList.add('chips');

  //внутрь div'a помещается сообщение, которое можно прописать при вызове функции
  chips.innerHTML = message;
  //Меняем цвет текста на цвет, который задаёт пользователь
  chips.style.color =  color;
  console.log(color.value);
  
  //вызываем фуекцию addChips с параметром chips
  addChips(chips);

  //таймер для удаления элемента. Первый параметр - функция, которая вызывает функцию, которая в свою очередь удаляет элемент, второй - время, через которое элемент удаляется
  setTimeout(function (){deleteChips(chips)},timeremove);
}

//функция, удаляющая элемент, в параметрах функции присутствует элемент над которым совершается действие
function deleteChips(chips) {
  chips.remove();
  let allChips = document.querySelectorAll('.chips-field .chips');
  if (allChips.length == 0) document.querySelector('.chips-field').remove();
  console.log(allChips);
}

//функция, которая создаёт обёртку для chips
function addChips(chips) {
  let chipsField = document.querySelector('.chips-field');
  //если есть поле chipsField, то добавить туда chips
  if (chipsField) {
    chipsField.appendChild(chips);
  }
  //иначе, по аналогии с chips создать chips-field и поместить в него chips
  else {
    let chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    document.querySelector('body').appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}

document.querySelector('button').onclick = function(){
  chips('hello');
}

//function ajax(url, method, functionName, dataArray)

//нужно послать на сервер даные в формате POST данные такого формата (date = '2018-12-30')
//POST -> date = '2018-12-30'


//data - это то, что получает функция от сервера, все данные, которые отправляет сервер обратно после обработки данных, которые мы передали ему
function showTime(data){
  //JSON.parse -функция, которая с строки JSON формата делает массив
  data = JSON.parse(data);
  console.log(data);
  //теперь можно лазить по элементам массива и выводить
  alert(data.F)
}

document.querySelector('button').onclick = function() {
  let input = document.querySelector('#inp-date');
  //формирую массив, который будет преобразовываться в строку, отправляться на сервер и возвращаться обратно обрабатываясь функцией showTime, эта функция с помощью JSON.parse соберёт ответ с сервера в виде строки в МАССИВ
  let date = { "date" : input.value};
  //после этого запуская ajax
  ajax('datetime.php', 'POST', showTime, date);
}
//(адрес куда посылваем запрос, метод спомощью которого посылается запрос, имя функции которая будет обрабатывать ответ от сервера, массив данных )
function ajax(url, method, functionName, dataArray) {
  //создаём новый запрос
  let xhttp = new XMLHttpRequest();
  //открываем соединение
  xhttp.open(method, url, true);
  //установка заголовков
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //инициализация, отправка запроса на сервер. массив нужно преобразовывать в строку
  xhttp.send(requestData(dataArray));

  // функция, которая вызывается по результату ajax запроса
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      functionName(this.response);
    }
  }
}

//вспомогательная функция, которая приводит массив к строчному виду
function requestData(dataArr){

  // функция получает массив, создаёт пустую переменную
  let out = '';

  //перебирает в полученном массиве ключ : значение
  for (let key in dataArr){
    // и добавляет к пустой переменной выстроенную строку, значения в которой взяты из массива
    out +=`${key}=${dataArr[key]}&`;
  }
  //в функцию возвращается out уже со строкой
  console.log(out);
  return out;
}

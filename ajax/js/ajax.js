// //XMLHttpRequest - объект, который дает возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы.

// //пораждаем объект через переменную
// let xhttp = new XMLHttpRequest();

// //открыть соединение (внутри скобок параметры которые должны быть указаны для подключения)
// // ('метод', url на какой адрес будем слать запрос, то как посылвается запрос(true-асинхронно) )
// xhttp.open('POST', 'back.php', true);

// //конфигурируем данные, которые отсылаем на сервер (заголовки), настраиваем тип данных, которые будем отсылать
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// //добавляю внутрь запроса данные, которые посылаю
// xhttp.send('name=vasya');

// //проверка состояние сервера
// xhttp.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     console.log(this);
//   }
// }

//(адрес куда посылваем запрос, метод спомощью которого посылается запрос, имя функции которая будет обрабатывать ответ от сервера, массив данных )
function ajax(url, method, functionName, dataArray) {
  //создаём новый запрос
  let xhttp = new XMLHttpRequest();
  //открываем соединение
  xhttp.open(method, url, true);
  //установка заголовков
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //инициализация, отправка запроса на сервер. массив нужно преобразовывать в строку
  xhttp.send(dataArray);

  // функция, которая вызывается по результату ajax запроса
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      functionName(this);
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
  return out;
}

let a = {
  "name" : "ivan",
  "age" : 25
}
// нужно name=ivan&age=53

function f1(data){
  console.log(data);
}

ajax('back.php', 'POST', f1, requestData(a));
document.querySelector('#signup-submit').onclick = function(event){
  //чтобы остановить стандартыне действия браузера 
  event.preventDefault();
  console.log('work');
  //после нажатия буду получать переменную
  let name = document.querySelector('#signup-name').value;
  let pass = document.querySelector('#signup-pass').value;
  let email = document.querySelector('#signup-email').value;
  let birthday = document.querySelector('#signup-birthday').value;
  //получаем все элементы по классу
  let sex = document.querySelectorAll('.sex');
  //теперь необходимо перебрать и проверить атрибут(отмечен ли checked)
  for (let i = 0; i<sex.length; i++){
    //и если отмечен, то присвоить переменной значение(value) инпута
    if(sex[i].checked) {
      sex = sex[i].value;
      break;
    }
  }
  let data = {
    'name' : name,
    'pass' : pass,
    'email' : email,
    'birthday' : birthday,
    'sex' : sex
  }

  ajax('core/signup.php', 'POST', signup, data);

  function signup(result){
    console.log(result);
    if(result == 2){
      alert('Заполните поля');
    }
    else if(result == 1){
      alert('Успех! Теперь можно войти.');
      document.querySelector('form').reset();
    }
    else {
      alert('Ошибка! Попробуйте зарегестрироваться позднее');
    }
  }
}

document.querySelector('#login-submit').onclick = function(event){
  //чтобы остановить стандартыне действия браузера 
  event.preventDefault();
  // //после нажатия буду получать переменную
  let pass = document.querySelector('#login-pass').value;
  let email = document.querySelector('#login-email').value;

  let data = {
    'pass' : pass,
    'email' : email
  }

  ajax('core/login.php', 'POST', login, data);

  function login(result){
    console.log(result);
    if (result == 2){
      alert('Заполните поля');
    }
    else if (result == 0){
      alert('Пользователь не найден');
    }
    else {
      console.log(result);
    }
  }
}
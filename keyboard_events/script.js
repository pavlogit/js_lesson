//задание 1
// если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.
document.querySelector('#test1').onkeypress = function (e) {
  console.log(e.keyCode);
  

  //Прописные буквы не вводятся
  if (e.shiftKey == true) {
    console.log('Большая буква');
    return false;
  }
  //цифры не вводятся
  else if (e.keyCode <= 57 || e.keyCode < 48 ) {
    console.log('Цифра');
    return false;
  }
}

//задание 2
// добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.
let deg = 0;
let left = 0;
let up = 0;


document.onkeydown = function (e) {

  // console.log(e.keyCode);
  let block = document.querySelector('.block');
  //пробел. поворот на 45 градусов 
  if (e.keyCode == 32) {
    deg = deg + 45;
    block.style.transform = 'rotate(' + deg + 'deg)' ;
    return false;
  }

  //стрелка вправо. сдвиг блока на 10px вправо + ограничение на движение
  else if (e.keyCode == 39) {
    left = left + 10; 
    if (left > 450) {
      left = 450;
    }
    block.style.marginLeft = left + 'px' ;
  }

  //стрелка влево. сдвиг блока на 10px влево + ограничение на движение
  else if (e.keyCode == 37) {
    left = left - 10; 
    if (left < -450) {
      left = -450;
    }
    block.style.marginLeft = left + 'px';
  }

  //стрелка вверх. сдвиг блока на 10px вверх + ограничение на движение
  else if (e.keyCode == 40) {
    up = up + 10;
    if (up > 250) {
      up = 250;
    }
    block.style.marginTop = up + 'px';
    return false;
  }
  //стрелка вниз. сдвиг блока на 10px вниз + ограничение на движение
  else if (e.keyCode == 38) {
    up = up - 10;
    if (up < -250) {
      up = -250;
    }
    block.style.marginTop = up +'px';
    return false;
  }

}


//задание 3
//при нажатии кнопки клавиатуры меняет символ на произвольный
document.querySelector('#test2').onkeypress = function (e) {
  console.log(e.keyCode);
  
  if (e.keyCode) {
    let random =  Math.round((Math.random() * 123 - 0.5));
    //возвращает строку значения Юникод, созданную из рандомного значение
    this.value += String.fromCharCode(random);
    //не возвращает введённое значение
    return false;
  }
}

//задание 4 
//меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z

let alphabeth = {
  q: "w",
  w: "e",
  e: "r",
  r: "t",
  t: "y",
  y: "u",
  u: "i",
  i: "o",
  o: "p",
  p: "a",
  a: "s",
  s: "d",
  d: "f",
  f: "g",
  g: "h",
  h: "j",
  j: "k",
  k: "l",
  l: "z",
  z: "x",
  x: "c",
  c: "v",
  v: "b",
  b: "n",
  n: "m",
  m: "q"
};

  document.querySelector('#test3').onkeypress = function (e) {
    if (e.keyCode > 96 && e.keyCode < 123) {
      //цикл for..in. перечисление
      for(let key in alphabeth) {
        if (e.key == key);
      }
    }
    this.value += alphabeth[e.key];
    return false;
  }


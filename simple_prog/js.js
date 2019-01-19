// let year = 1993;
// let thisYear = 2018;
// p = document.querySelector('#out');
// year = thisYear - year;
// p.innerHTML = 'Текущий год: ' + thisYear + ', мне ' + year + ' лет';
// console.log(year);
let year = 1993, currentYear = 2018;
document.querySelector('#out').innerHTML = 'Текущий год: ' + currentYear + ', мне ' + (year = currentYear - year) + ' лет';


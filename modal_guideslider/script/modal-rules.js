document.querySelector('.read-rules').onclick = function () {
  document.querySelector('.modal-slider').style.marginLeft = '-100%';
}

document.querySelectorAll('.read-rules-back').forEach(function (element) {
  element.onclick = function closeModal() {
    document.querySelector('.modal-slider').style.marginLeft = '0';
  }
});



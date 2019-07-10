'use strict';
(function () {
var upload = document.querySelector('.img-upload__overlay');
var uploadOpen = document.getElementById('upload-file');
var uploadClose = document.getElementById('upload-cancel');
var label = document.querySelector('.img-upload__effect-level');
var socialText = document.querySelector('.social__footer-text');

// Объявили обработчик ESC
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    upClose();
  }
};
// открытие и закрытия попапа.
uploadOpen.addEventListener('change', function () {
  upload.classList.remove('hidden');
  label.classList.add('hidden');
  if (oldValue !== null) {
    img.classList.remove('effects__preview--' + oldValue);
  }
  img.removeAttribute('style');
  document.addEventListener('keydown', onPopupEscPress);
});

var upClose = function () {
  upload.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

uploadClose.addEventListener('click', function () {
  upload.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
});

// фокус на элементе
document.addEventListener('focus', function (evt) {
  var target = evt.target;

  while (target !== document) {
    if (target.classList.contains('text__description')) {
      document.removeEventListener('keydown', onPopupEscPress);
    }
    target = target.parentNode;
  }
}, true);

document.addEventListener('blur', function (evt) {
  var target = evt.target;

  while (target !== document) {
    if (target.classList.contains('text__description')) {
      document.addEventListener('keydown', onPopupEscPress);
    }
    target = target.parentNode;
  }
}, true);

// валидация
socialText.addEventListener('invalid', function () {
  if (socialText.validity.tooLong) {
    socialText.setCustomValidity('Комментарий не должен превышать 140-ка символов');
  } else {
    socialText.setCustomValidity('');
  }
});
})();

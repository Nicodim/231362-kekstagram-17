'use strict';
(function () {
  // Генерируем шаблон фотографий
  function renderUserPictures(picture) {
    var picturesTemplate = document.querySelector('#picture')
    .content.querySelector('.picture');

    var clonePicture = picturesTemplate.cloneNode(true);

    clonePicture.querySelector('.picture__img').src = picture.url;
    clonePicture.querySelector('.picture__likes').textContent = picture.likes;
    clonePicture.querySelector('.picture__comments').textContent = picture.comments.length;

    return clonePicture;
  }

  // Добавляем фотки в ДОМ
  window.render = {

    addPictures: function (array) {

      var fragment = document.createDocumentFragment();
      var picturesContainer = document.querySelector('.pictures');

      for (var i = 0; i < array.length; i++) {

        fragment.appendChild(renderUserPictures(array[i]));
      }

      picturesContainer.appendChild(fragment);

    },

    removePictures: function () {
      var pictures = document.querySelectorAll('.picture');
      pictures.forEach(function (node) {
        node.remove();
      });
    }

  };

})();

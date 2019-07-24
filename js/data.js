'use strict';
// (function () {
//
//   var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
//   var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
//
//   var url = function (n) {
//     return 'photos/' + n + '.jpg';
//   };
//   // лайки
//   var likes = function (min, max) {
//     var random = min - 0.5 + Math.random() * (max - min + 1);
//     random = Math.round(random);
//     return random;
//   };
//
//   var getRandomComment = function (comment) {
//     var randomComment = comment[Math.floor(Math.random() * comments.length)];
//     return randomComment;
//   };
//
//   var getRandomName = function (Name) {
//     var randomName = Name[Math.floor(Math.random() * Name.length)];
//     return randomName;
//   };
//
//   var getRandomAvatar = function (n) {
//     return 'img/' + Math.floor(Math.random() * (n + 1 - 1)) + 1 + '.svg';
//   };
//
//   var commentArr = function (n) {
//     var user = [];
//     for (var i = 0; i < n; i++) {
//       user[i] = {avatar: getRandomAvatar(6), message: getRandomComment(comments), name: getRandomName(names)};
//     }
//     return user;
//   };
//
//   var createNewArr = function (n) {
//     var ojectArr = [];
//     var min = 0;
//     var max = 100;
//     for (var i = 1; i <= n; i++) {
//       ojectArr.push({url: url(i), likes: likes(min, max), comments: commentArr(Math.floor(Math.random() * 10))});
//     }
//     return ojectArr;
//   };
//
//   var picture = document.querySelector('#picture')
//   .content.querySelector('.picture');
//
//   var newPicture = function (data) {
//     var picturedArr = [];
//     for (var i = 0; i < data.length; i++) {
//       var pictureElement = picture.cloneNode(true);
//       pictureElement.querySelector('.picture__img').src = data[i].url;
//       pictureElement.querySelector('.picture__likes').textContent = data[i].likes;
//       pictureElement.querySelector('.picture__comments').textContent = data[i].comments.length;
//       picturedArr.push(pictureElement);
//     }
//     return picturedArr;
//   };
//
//   function addPictures(arr) {
//     var fragment = document.createDocumentFragment();
//     for (var i = 0; i < arr.length; i++) {
//       fragment.appendChild(arr[i]);
//     }
//     return fragment;
//   }
//
//   var array = createNewArr(25);
//   var pictures = newPicture(array);
//   var fragment = addPictures(pictures);
//   document.querySelector('.pictures').appendChild(fragment);
// })();


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

  // Успешная загрузка
  var successHandler = function (array) {
    var fragment = document.createDocumentFragment();
    var newPictures = document.querySelector('.pictures');

    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(renderUserPictures(array[i]));
    }
  newPictures.appendChild(fragment);
  };

  // ошибка
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();

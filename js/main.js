'use strict';
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var url = function (n) {
  return 'photos/' + n + '.jpg';
};

var likes = function (min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
};

var getRandomComment = function (comment) {
  var randomComment = comment[Math.floor(Math.random() * comments.length)];
  return randomComment;
};

var getRandomName = function (Name) {
  var randomName = Name[Math.floor(Math.random() * Name.length)];
  return randomName;
};

var getRandomAvatar = function (n) {
  return 'img/' + Math.floor(Math.random() * (n + 1 - 1)) + 1 + '.svg';
};

var commentArr = function (n) {
  var user = [];
  for (var i = 0; i < n; i++) {
    user[i] = {avatar: getRandomAvatar(6), message: getRandomComment(comments), name: getRandomName(names)};
  }
  return user;
};

var createNewArr = function (n) {
  var ojectArr = [];
  var min = 0;
  var max = 100;
  for (var i = 1; i <= n; i++) {
    ojectArr.push({url: url(i), likes: likes(min, max), comments: commentArr(Math.floor(Math.random() * 10))});
  }
  return ojectArr;
};

var picture = document.querySelector('#picture')
.content
.querySelector('.picture');

var newPicture = function (data) {
  var picturedArr = [];
  for (var i = 0; i < data.length; i++) {
    var pictureElement = picture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = data[i].url;
    pictureElement.querySelector('.picture__likes').textContent = data[i].likes;
    pictureElement.querySelector('.picture__comments').textContent = data[i].comments.length;
    picturedArr.push(pictureElement);
  }
  return picturedArr;
};

function addPictures(arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(arr[i]);
  }
  return fragment;
}

var array = createNewArr(25);
var pictures = newPicture(array);
var fragment = addPictures(pictures);
document.querySelector('.pictures').appendChild(fragment);

var upload = document.querySelector('.img-upload__overlay');
var uploadOpen = document.getElementById('upload-file');
var uploadClose = document.getElementById('upload-cancel');
var change = document.querySelector('.effects__list');
var img = document.querySelector('.img-upload__preview');
var smoll = document.querySelector('.scale__control--smaller');
var big = document.querySelector('.scale__control--bigger');
var bar = document.querySelector('.scale__control--value');

uploadOpen.addEventListener('change', function () {
  upload.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      upload.classList.add('hidden');
    }
  });
});

uploadClose.addEventListener('click', function () {
  upload.classList.add('hidden');
});

var oldValue = null;
change.addEventListener('change', function (evt) {
  var target = evt.target;
  while (target !== document) {
    if (target.classList.contains('effects__radio')) {
      if (oldValue !== null) {
        img.classList.remove('effects__preview--' + oldValue);
      }
      oldValue = target.value;
      img.classList.add('effects__preview--' + target.value);
      return;
    }
    target = target.parentNode;
  }
});

var getControlValue = function (carrent, min, max) {
var min = 25;
var max = 100;
if (min <= carrent <= max) {
  return true;
}
};

smoll.addEventListener('click', function () {
  if getControlValue {
    bar - 25;
  }
  return;
});

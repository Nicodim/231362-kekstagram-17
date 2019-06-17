'use strict';
var name = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var url = function (n) {
  return 'photos/' + n + '.jpg';
}

var likes = function (min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(rand);
  return random;
}

var getRandomComment = function (comment) {
  var randomComment = comment[Math.floor(Math.random() * commentst.length)];
  return randomComment;
};

var getRandomName = function (Name) {
  var randomName = Name[Math.floor(Math.random() * name.length)];
  return randomName;
};

var getRandomAvatar = function (n) {
  for (i = 0; i < n; i++) {
    var avatar = Avatar[Math.floor(Math.random() * n.length)];
    return 'img/' + avatar[i] + '.svg';
  }
}

var commentArr = function (n) {
  var user = [];
  for (i = 0; i < n; i++) {
    user[i] = {avatar: getRandomAvatar(n), message: getRandomComment(comment), name: getRandomName(Name)};
  }
  return user;
};

var createNewArr = function (n) {
  var ojectArr = [];
  for (i = 0; i < n; i++) {
    ojectArr[i] = {url: url(n), likes: likes(min, max), comments: commentArr(Math.floor(Math.random() * 10))};
  }
  return ojectArr;
};

var picture = document.querySelector('#picture')
.content
.querySelector('.picture');

var newPicture = function (data) {
    var pictureElement = picture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = data.url;
    pictureElement.querySelector('.picture__likes').textContent = data.likes;
    pictureElement.querySelector('.picture__comments').textContent = data.commentArr;
  }
  return pictureElement;
};

function addPictures(arr) {
var fragment = document.createDocumentFragment();
for (var i = 0; i < arr.length; i++) {
  fragment.appendChild(ojectArr(pictureElement[i]));
}
return fragment;
}

'use strict';

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var url = function (n) {
var photo = 'photos/{{i}}.jpg';
for (var i = 0; i < n.length; i++) {
  return photo[i];
}
}

var likes = function (min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(rand);
  return random;
}

var getRandomComment = function (comment) {
  var randomComment = comment[Math.floor(Math.random() * comment.length)];
  return randomComment;
};

var createNewArr = function (n) {
  var ojectArr = [];
  for (i = 0; i < n; i++) {
    ojectArr[i] = {url: function(photo), likes: function(random), comments: function(randomComment)};
  }
  return ojectArr;
};

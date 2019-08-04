'use strict';

var onPopupEscPress = function (evt) {
	if (evt.keyCode === window.util.ESC_KEYCODE) {
		document.removeEventListener('keydown', onPopupEscPress);
		closePopup();
	}
};

var onPopupCloseClick = function (evt) {
	evt.target.removeEventListener('click', onPopupCloseClick);
	closePopup();
}

var closePopup = function () {
	document.querySelector('.big-picture').classList.add('hidden');
};



window.renderPreview = function (data) {
  var preview = document.querySelector('.big-picture');
  var avatarComment = preview.querySelector('.big-picture__img img');
  var description = preview.querySelector('.social__caption');
  var countLikes = preview.querySelector('.likes-count');
  var blockCountComments = preview.querySelector('.social__comment-count');
  var countComments = blockCountComments.querySelector('.comments-count');
  var loaderComments = preview.querySelector('.comments-loader');
  var listComments = preview.querySelector('.social__comments');
  var comment = listComments.querySelector('.social__comment');

  avatarComment.src = data.url;
  countLikes.textContent = data.likes;
  countComments.textContent = data.comments.length;
  description.textContent = data.description;
  blockCountComments.classList.add('visually-hidden');
  loaderComments.classList.add('visually-hidden');
  var newComment = comment.cloneNode(true);

  var fragment = document.createDocumentFragment();
  fragment.appendChild(listComments.cloneNode(false));

  for (var i = 0; i < data.comments.length; i++) {
    var newSocialComment = newComment.cloneNode(true);
    newSocialComment.querySelector('.social__picture').src = 'img/avatar-' + window.util.getRandomNumber(1, 6) + '.svg';
    newSocialComment.querySelector('.social__text').textContent = data.comments[i].message;
    fragment.firstChild.appendChild(newSocialComment);
  }
  listComments.parentNode.replaceChild(fragment, listComments);

  render.addEventListener('click', onPopupCloseClick);
  document.addEventListener('keydown', onPopupEscPress);
};

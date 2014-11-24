var RANDOM_MATRIX = [14,71,152]

function irand(min, max) {
  return Math.round(rand(min, max));
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function getController() {
	if (document._hasController) {
		return document._controller;
	} else {
		return document._video;
	}
}

function video() {
	return $('video')[0]
}

function play() {
	video().play()
}

function pause() {
	video().pause();
}

function random() {
	return rand(0,180)
}

function goto(second) {
	video().currentTime = second	
}

$(document).ready(function() {
	play();
	$(document).keypress(function() {
		goto(random());
	});
});
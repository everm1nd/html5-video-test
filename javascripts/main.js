var RANDOM_MATRIX = [14,30,42,71,94,103,131,152,170]

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


function matrix_random() {
	return RANDOM_MATRIX[irand(0,RANDOM_MATRIX.length - 1)]
}

function random() {
	return rand(0,180)
}

function call_jesus() {
	video().currentTime = matrix_random()	
}

$(document).ready(function() {
	play();
	$(document).keypress(function() {
		call_jesus();
	});
});
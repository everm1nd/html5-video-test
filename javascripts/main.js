var videoCtrl;
var RANDOM_MATRIX = [
  { seconds: 14 },
  { seconds: 30 },
  { seconds: 42 },
  { seconds: 71 },
  { seconds: 94 },
  { seconds: 103 },
  { seconds: 131 },
  { seconds: 152 },
  { seconds: 170 },
  { SMPTE: '00:01:12:22' }
]

function irand(min, max) {
  return Math.round(rand(min, max));
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function video() {
  return videoCtrl.video;
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
	videoCtrl.seekTo(matrix_random());
}

function init() {
  videoCtrl = VideoFrame({
    id : 'videoPlayer',
    frameRate: FrameRates.film,
    callback : function(response) {
        console.log('callback response: ' + response);
    }
  });
}

$(document).ready(function() {
  init();
	play();
	$(document).keypress(function() {
		call_jesus();
	});
});

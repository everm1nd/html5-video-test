var videoController;

function bind_events() {
  $('#videoPlayer').click(videoController.jump);
	$(document).keypress(videoController.jump);
}

$(document).ready(function() {
  videoController = new VideoController();
	videoController.play();
  bind_events();
});

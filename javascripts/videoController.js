function VideoController() {
  var controller,
      video;

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

  // public

  this.play = function(){
  	video.play()
  }

  this.pause = function() {
  	video.pause();
  }

  this.jump = function() {
    controller.seekTo(_.sample(RANDOM_MATRIX));
  };

  this.setSpeed = function(rate) {
    video.playbackRate = rate;
  };

  // private

  (function init() {
    controller = VideoFrame({
      id : 'videoPlayer',
      frameRate: FrameRates.film,
      callback : function(response) {
          console.log('callback response: ' + response);
      }
    });
    video = controller.video;
  })();
};

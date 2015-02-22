function GuiController() {
  var Menu = function() {
    this.name = "Developer Controls";
    this.speed = 1.0;
    this.played = true;
    this.jump = videoController.jump;
  };

  // public

  // private

  (function init() {
    var menu = new Menu();
    var gui = new dat.GUI();

    gui.add(menu, 'name');
    gui.add(menu, 'speed', 0.1, 10).onChange(function(value){
      videoController.setSpeed(value);
    });
    gui.add(menu, 'played').onFinishChange(function(value){
      if (value) { videoController.play(); }
      else { videoController.pause(); };
    });
    gui.add(menu, 'jump');
  })();
};

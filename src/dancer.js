//Refactor Dancer Class, in pseudoclassical style
// Creates and returns a new dancer object that can step

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

//Schedule next step for each dancer
Dancer.prototype.step = function (time) {
  setTimeout(this.step.bind(this), time);

};
//Set position for each dancer
Dancer.prototype.setPosition = function (p1, p2) {
  var styleSettings = {
    top: p1,
    left: p2
  };
  this.$node.css(styleSettings);
};


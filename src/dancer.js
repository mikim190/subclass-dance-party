//Refactor Dancer Class, in pseudoclassical style
// Creates and returns a new dancer object that can step

var Dancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

//Schedule next step for each dancer
Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
//Set position for each dancer
Dancer.prototype.setPosition = function (p1, p2) {
  var styleSettings = {
    top: p1,
    left: p2
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function (p1) {
  var linesettings = {
    top: p1,
    left: 0,
    display: 'block'
  };
  this.$node.css(linesettings);
};

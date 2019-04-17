var DancingPokemon = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function



DancingPokemon.prototype = Object.create(Dancer.prototype);
DancingPokemon.prototype.constructor = DancingPokemon;
DancingPokemon.prototype.toggleDance = DancingPokemon.prototype.step;

DancingPokemon.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.toggleDance();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('pikachuuuu');
  // this.$node.slideToggle();

};

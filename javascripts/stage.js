(function() {
  this.Stage = (function() {
    function Stage() {
      this.player = new Player();
    }
    Stage.prototype.update = function() {
      return this.player.update();
    };
    Stage.prototype.render = function(ctx) {
      return this.player.render(ctx);
    };
    return Stage;
  })();
}).call(this);

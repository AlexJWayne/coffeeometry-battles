(function() {
  this.Stage = (function() {
    function Stage() {
      this.player = new Player();
    }
    Stage.prototype.update = function() {
      return this.player.update();
    };
    Stage.prototype.render = function(ctx) {
      this.renderGrid(ctx);
      return this.player.render(ctx);
    };
    Stage.prototype.renderGrid = (function() {
      var renderLines;
      renderLines = function(ctx, spacing, lw) {
        var i, _ref;
        ctx.beginPath();
        for (i = _ref = -100; (_ref <= 100 ? i < 100 : i > 100); i += spacing) {
          ctx.moveTo(-100, i - lw / 2);
          ctx.lineTo(100, i - lw / 2);
          ctx.moveTo(i - lw / 2, -100);
          ctx.lineTo(i - lw / 2, 100);
        }
        ctx.closePath();
        return ctx.stroke();
      };
      return function(ctx) {
        var lw;
        lw = 200 / Game.game.canvas.node.width;
        ctx.lineWidth = lw;
        ctx.strokeStyle = "#333";
        renderLines(ctx, 20 / 3, lw);
        ctx.strokeStyle = "#444";
        return renderLines(ctx, 20, lw);
      };
    })();
    return Stage;
  })();
}).call(this);

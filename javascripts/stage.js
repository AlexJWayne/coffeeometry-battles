(function() {
  this.Stage = (function() {
    function Stage() {
      var enemy, i;
      this.player = new Player();
      this.gameObjects = (function() {
        var _results;
        _results = [];
        for (i = 0; i < 10; i++) {
          enemy = new GameObject();
          enemy.dragForce = 0;
          enemy.pos = v(Math.random() * 200 - 100, Math.random() * 200 - 100);
          enemy.vel = v(Math.random() * enemy.maxSpeed / 2, 0);
          enemy.vel.angle = Math.random() * 360;
          _results.push(enemy);
        }
        return _results;
      })();
      this.gameObjects.push(this.player);
    }
    Stage.prototype.update = function() {
      var gameObj, _i, _len, _ref, _results;
      _ref = this.gameObjects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        gameObj = _ref[_i];
        _results.push(gameObj.update());
      }
      return _results;
    };
    Stage.prototype.render = function(ctx) {
      var gameObj, _i, _len, _ref, _results;
      this.renderGrid(ctx);
      _ref = this.gameObjects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        gameObj = _ref[_i];
        _results.push(gameObj.render(ctx));
      }
      return _results;
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

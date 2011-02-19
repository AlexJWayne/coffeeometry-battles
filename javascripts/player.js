(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  this.Player = (function() {
    var directionMapping;
    __extends(Player, GameObject);
    directionMapping = {
      38: Vector.up(),
      37: Vector.left(),
      40: Vector.down(),
      39: Vector.right()
    };
    directionMapping[87] = directionMapping[38];
    directionMapping[65] = directionMapping[37];
    directionMapping[83] = directionMapping[40];
    directionMapping[68] = directionMapping[39];
    function Player() {
      var handleKey;
      Player.__super__.constructor.call(this);
      this.color = 'rgb(0, 200, 0)';
      handleKey = function(isDown, e) {
        var direction;
        direction = directionMapping[e.which];
        if ((direction != null) && ((isDown && !direction.active) || (!isDown && direction.active))) {
          direction.active = isDown;
          return this.accel[isDown ? 'add' : 'subtract'](direction.clone().scale(this.accelForce));
        }
      };
      document.onkeydown = _(handleKey).bind(this, true);
      document.onkeyup = _(handleKey).bind(this, false);
    }
    Player.prototype.update = function() {
      return Player.__super__.update.call(this);
    };
    Player.prototype.render = function(ctx) {
      return Player.__super__.render.call(this, ctx);
    };
    return Player;
  })();
}).call(this);

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
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
      this.radius = 4;
      this.firing = false;
      this.firingTarget = Vector.zero();
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
      Game.game.canvas.node.onmousemove = __bind(function(e) {
        this.firingTarget.x = e.offsetX;
        return this.firingTarget.y = e.offsetY;
      }, this);
      Game.game.canvas.node.onmousedown = __bind(function(e) {
        return this.firing = true;
      }, this);
      document.onmouseup = __bind(function(e) {
        return this.firing = false;
      }, this);
    }
    Player.prototype.update = function() {
      Player.__super__.update.call(this);
      return this.fire();
    };
    Player.prototype.fire = function() {
      var bullet;
      if (this.firing) {
        bullet = new Bullet(this.pos, Game.game.canvas.toGamePos(this.firingTarget));
        return Game.game.stage.gameObjects.push(bullet);
      }
    };
    Player.prototype.render = function(ctx) {
      return Player.__super__.render.call(this, ctx);
    };
    return Player;
  })();
}).call(this);

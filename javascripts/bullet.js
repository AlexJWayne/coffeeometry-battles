(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  this.Bullet = (function() {
    __extends(Bullet, GameObject);
    function Bullet(pos, target) {
      Bullet.__super__.constructor.call(this);
      this.pos = pos.clone();
      this.radius = 1.5;
      this.color = 'rgb(255, 255, 0)';
      this.vel = target.clone().subtract(this.pos);
      this.vel.length = 500;
      this.vel.angle += Math.random() * 5 - 2.5;
    }
    Bullet.prototype.update = function() {
      Bullet.__super__.update.call(this);
      if (this.vel.length < 50) {
        return Game.game.stage.gameObjects = _(Game.game.stage.gameObjects).without(this);
      }
    };
    return Bullet;
  })();
}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.Player = (function() {
    var directionMapping;
    directionMapping = {
      37: Vector.left(),
      38: Vector.up(),
      39: Vector.right(),
      40: Vector.down()
    };
    function Player() {
      this.pos = Vector.zero();
      this.vel = Vector.zero();
      this.accel = Vector.zero();
      this.accelForce = 700;
      this.dragForce = 350;
      this.maxSpeed = 350;
      document.onkeydown = __bind(function(e) {
        var direction;
        direction = directionMapping[e.which];
        if ((direction != null) && !direction.active) {
          direction.active = true;
          return this.accel.add(direction.clone().scale(this.accelForce));
        }
      }, this);
      document.onkeyup = __bind(function(e) {
        var direction;
        direction = directionMapping[e.which];
        if ((direction != null) && direction.active) {
          direction.active = false;
          return this.accel.subtract(direction.clone().scale(this.accelForce));
        }
      }, this);
    }
    Player.prototype.update = function() {
      var drag;
      if (this.vel.length > this.dragForce * Game.perS) {
        drag = this.vel.clone();
        drag.length = this.dragForce * Game.perS;
        this.vel.subtract(drag);
      } else {
        this.vel.length = 0;
      }
      this.vel.add(this.accel.clone().scale(Game.perS));
      if (this.vel.length > this.maxSpeed) {
        this.vel.length = this.maxSpeed;
      }
      this.pos.add(this.vel.clone().scale(Game.perS));
      if (this.pos.x < -100) {
        this.pos.x += 200;
      }
      if (this.pos.x > 100) {
        this.pos.x -= 200;
      }
      if (this.pos.y < -100) {
        this.pos.y += 200;
      }
      if (this.pos.y > 100) {
        return this.pos.y -= 200;
      }
    };
    Player.prototype.render = function(ctx) {
      ctx.setFillColor('rgb(200,0,0)');
      return ctx.fillCircle(this.pos, 5);
    };
    return Player;
  })();
}).call(this);

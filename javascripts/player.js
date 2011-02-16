(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.Player = (function() {
    var directionMapping;
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
      this.pos = Vector.zero();
      this.vel = Vector.zero();
      this.accel = Vector.zero();
      this.accelForce = 700;
      this.dragForce = 350;
      this.maxSpeed = 350;
      this.radius = 5;
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
      if (this.pos.x - this.radius < -100 && this.vel.x < 0) {
        this.pos.x = -100 + this.radius;
        this.vel.x *= -1;
      }
      if (this.pos.x + this.radius > 100 && this.vel.x > 0) {
        this.pos.x = 100 - this.radius;
        this.vel.x *= -1;
      }
      if (this.pos.y - this.radius < -100 && this.vel.y < 0) {
        this.pos.y = -100 + this.radius;
        this.vel.y *= -1;
      }
      if (this.pos.y + this.radius > 100 && this.vel.y > 0) {
        this.pos.y = 100 - this.radius;
        return this.vel.y *= -1;
      }
    };
    Player.prototype.render = function(ctx) {
      ctx.setFillColor('rgb(200,0,0)');
      ctx.strokeStyle = "rgba(0,0,0,0)";
      return ctx.fillCircle(this.pos, this.radius);
    };
    return Player;
  })();
}).call(this);

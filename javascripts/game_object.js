(function() {
  this.GameObject = (function() {
    function GameObject() {
      this.color = 'rgb(200, 0, 0)';
      this.pos = Vector.zero();
      this.vel = Vector.zero();
      this.accel = Vector.zero();
      this.accelForce = 700;
      this.dragForce = 350;
      this.maxSpeed = 350;
      this.radius = 3;
    }
    GameObject.prototype.update = function() {
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
    GameObject.prototype.render = function(ctx) {
      ctx.setFillColor(this.color);
      ctx.strokeStyle = "rgba(0,0,0,0)";
      return ctx.fillCircle(this.pos, this.radius);
    };
    return GameObject;
  })();
}).call(this);

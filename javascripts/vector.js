(function() {
  var Vector;
  Vector = (function() {
    function Vector(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
    }
    Vector.prototype.clone = function() {
      return new Vector(this.x, this.y);
    };
    Vector.prototype.length = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.add = function(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    };
    Vector.prototype.subtract = function(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    };
    Vector.prototype.scale = function(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    };
    Vector.prototype.normalize = function() {
      return this.scale(1 / this.length());
    };
    Vector.prototype.distance = function(other) {
      return this.clone().subtract(other).length();
    };
    Vector.prototype.angle = function() {
      return Math.atan(this.y / this.x) * 180 / Math.PI;
    };
    return Vector;
  })();
  Vector.zero = function() {
    return new Vector();
  };
  Vector.up = function() {
    return new Vector(0, 1);
  };
  Vector.down = function() {
    return new Vector(0, -1);
  };
  Vector.left = function() {
    return new Vector(-1, 0);
  };
  Vector.right = function() {
    return new Vector(1, 0);
  };
  this.Vector = Vector;
}).call(this);

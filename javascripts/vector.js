(function() {
  this.Vector = (function() {
    function Vector(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
    }
    Vector.prototype.clone = function() {
      return new Vector(this.x, this.y);
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
      return this.scale(1 / this.length);
    };
    Vector.prototype.toString = function() {
      return "<Vector: " + this.x + " " + this.y + ">";
    };
    Vector.prototype.equal = function(other) {
      return this.x === other.x && this.y === other.y;
    };
    Vector.prototype.distance = function(other) {
      return this.clone().subtract(other).length;
    };
    return Vector;
  })();
  this.Vector.prototype.__defineGetter__('angle', function() {
    var result;
    result = Math.atan2(this.y, this.x) * 180 / Math.PI;
    if (result < 0) {
      result += 360;
    }
    return result;
  });
  this.Vector.prototype.__defineSetter__('angle', function(newAngle) {
    var oldLength;
    oldLength = this.length;
    this.x = Math.cos(newAngle * Math.PI / 180);
    this.y = Math.sin(newAngle * Math.PI / 180);
    return this.length = oldLength;
  });
  this.Vector.prototype.__defineGetter__('length', function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  });
  this.Vector.prototype.__defineSetter__('length', function(newLength) {
    if (newLength === 0) {
      this.scale(0);
      return;
    } else if (this.length === 0) {
      this.x = 1;
    }
    return this.scale(newLength / this.length);
  });
  this.Vector.zero = function() {
    return new Vector();
  };
  this.Vector.up = function() {
    return new Vector(0, 1);
  };
  this.Vector.down = function() {
    return new Vector(0, -1);
  };
  this.Vector.left = function() {
    return new Vector(-1, 0);
  };
  this.Vector.right = function() {
    return new Vector(1, 0);
  };
  this.v = function(x, y) {
    return new Vector(x, y);
  };
}).call(this);

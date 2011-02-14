(function() {
  describe('Vector', function() {
    describe('constructor', function() {
      it('should accept an x and y', function() {
        var v1;
        v1 = new Vector(13, -109);
        expect(v1.x).toEqual(13);
        return expect(v1.y).toEqual(-109);
      });
      it('should default to zero', function() {
        var v1;
        v1 = new Vector();
        expect(v1.x).toEqual(0);
        return expect(v1.y).toEqual(0);
      });
      return it('should have a convenience shortcut v()', function() {
        expect(v().length).toEqual(0);
        return expect(v(3, 4).length).toEqual(5);
      });
    });
    describe('static methods', function() {
      it('Vector.zero() should make a zero length vector', function() {
        var v1;
        v1 = Vector.zero();
        expect(v1.x).toEqual(0);
        return expect(v1.y).toEqual(0);
      });
      it('Vector.up() should make a zero length vector', function() {
        var v1;
        v1 = Vector.up();
        expect(v1.x).toEqual(0);
        return expect(v1.y).toEqual(1);
      });
      it('Vector.down() should make a zero length vector', function() {
        var v1;
        v1 = Vector.down();
        expect(v1.x).toEqual(0);
        return expect(v1.y).toEqual(-1);
      });
      it('Vector.left() should make a zero length vector', function() {
        var v1;
        v1 = Vector.left();
        expect(v1.x).toEqual(-1);
        return expect(v1.y).toEqual(0);
      });
      return it('Vector.right() should make a zero length vector', function() {
        var v1;
        v1 = Vector.right();
        expect(v1.x).toEqual(1);
        return expect(v1.y).toEqual(0);
      });
    });
    describe('instance methods', function() {
      describe('clone()', function() {
        return it('should create a v with the same values', function() {
          var v1, v2;
          v1 = v(1, 2);
          v2 = v1.clone();
          v2.x = 10;
          return expect(v1.x).not.toEqual(v2.x);
        });
      });
      describe('add()', function() {
        return it('should add another vector to this one', function() {
          var ret, v1;
          v1 = v(3, 4);
          ret = v1.add(v(3, 4));
          expect(v1.x).toEqual(6);
          expect(v1.y).toEqual(8);
          return expect(ret).toBe(v1);
        });
      });
      describe('subtract()', function() {
        return it('should subtract another vector from this one', function() {
          var ret, v1;
          v1 = v(3, 4);
          ret = v1.subtract(v(1, 2));
          expect(v1.x).toEqual(2);
          expect(v1.y).toEqual(2);
          return expect(ret).toBe(v1);
        });
      });
      describe('scale()', function() {
        return it('should multiply a vector by a scalar', function() {
          var ret, v1;
          v1 = v(2, 4);
          ret = v1.scale(1.5);
          expect(v1.x).toEqual(3);
          expect(v1.y).toEqual(6);
          return expect(ret).toBe(v1);
        });
      });
      describe('normalize()', function() {
        return it('should force the vector to a length of 1', function() {
          var ret, v1;
          v1 = v(100, 0);
          ret = v1.normalize();
          expect(v1.x).toEqual(1);
          expect(v1.y).toEqual(0);
          expect(v1.length).toEqual(1);
          return expect(ret).toBe(v1);
        });
      });
      describe('distance()', function() {
        return it('should return the distance from another vector', function() {
          var v1, v2;
          v1 = v(5, 0);
          v2 = v(5, 5);
          return expect(v1.distance(v2)).toEqual(5);
        });
      });
      describe('equal()', function() {
        it('should return true for equal vectors', function() {
          return expect(v(1, 2).equal(v(1, 2))).toBeTruthy();
        });
        return it('should return false for unequal vectors', function() {
          return expect(v(1, 2).equal(v(3, 2))).toBeFalsy();
        });
      });
      return describe('toString()', function() {
        return it('should return a vector string', function() {
          return expect(v(3, 4).toString()).toEqual("<Vector: 3 4>");
        });
      });
    });
    describe('properties', function() {
      describe('angle', function() {
        it('should return the angle in degrees', function() {
          expect(v(1, 1).angle).toEqual(45);
          expect(v(0, 1).angle).toEqual(90);
          expect(v(0, -1).angle).toEqual(270);
          return expect(v(-1, -1).angle).toEqual(225);
        });
        return it('should set the angle in degrees', function() {
          var v1;
          v1 = v(0, 1000);
          v1.angle = 45;
          expect(Math.round(v1.angle)).toEqual(45);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = 90;
          expect(Math.round(v1.angle)).toEqual(90);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = 135;
          expect(Math.round(v1.angle)).toEqual(135);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = 180;
          expect(Math.round(v1.angle)).toEqual(180);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = 225;
          expect(Math.round(v1.angle)).toEqual(225);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = -90;
          expect(Math.round(v1.angle)).toEqual(270);
          expect(Math.round(v1.length)).toEqual(1000);
          v1.angle = -45;
          expect(Math.round(v1.angle)).toEqual(315);
          return expect(Math.round(v1.length)).toEqual(1000);
        });
      });
      return describe('length', function() {
        it('should return the length', function() {
          var v1;
          v1 = v(3, 4);
          return expect(v1.length).toEqual(5);
        });
        it('should set the length', function() {
          var v1;
          v1 = v(3, 4);
          v1.scale(10);
          expect(v1.length).toEqual(50);
          v1.length = 5;
          expect(v1.length).toEqual(5);
          expect(v1.x).toEqual(3);
          return expect(v1.y).toEqual(4);
        });
        return it('should allow zero to be set for length', function() {
          var v1;
          v1 = v(3, 4);
          v1.length = 0;
          return expect(v1.length).toEqual(0);
        });
      });
    });
    return it('should be chainable', function() {
      var v1;
      v1 = v(10, 0).normalize().add(Vector.up()).scale(10);
      expect(v1.x).toEqual(10);
      return expect(v1.y).toEqual(10);
    });
  });
}).call(this);

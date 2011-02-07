(function() {
  describe('Vector', function() {
    describe('constructor', function() {
      it('should accept an x and y', function() {
        var v;
        v = new Vector(13, -109);
        expect(v.x).toEqual(13);
        return expect(v.y).toEqual(-109);
      });
      return it('should default to zero', function() {
        var v;
        v = new Vector();
        expect(v.x).toEqual(0);
        return expect(v.y).toEqual(0);
      });
    });
    describe('static methods', function() {
      it('Vector.zero() should make a zero length vector', function() {
        var v;
        v = Vector.zero();
        expect(v.x).toEqual(0);
        return expect(v.y).toEqual(0);
      });
      it('Vector.up() should make a zero length vector', function() {
        var v;
        v = Vector.up();
        expect(v.x).toEqual(0);
        return expect(v.y).toEqual(1);
      });
      it('Vector.down() should make a zero length vector', function() {
        var v;
        v = Vector.down();
        expect(v.x).toEqual(0);
        return expect(v.y).toEqual(-1);
      });
      it('Vector.left() should make a zero length vector', function() {
        var v;
        v = Vector.left();
        expect(v.x).toEqual(-1);
        return expect(v.y).toEqual(0);
      });
      return it('Vector.right() should make a zero length vector', function() {
        var v;
        v = Vector.right();
        expect(v.x).toEqual(1);
        return expect(v.y).toEqual(0);
      });
    });
    describe('instance methods', function() {
      describe('clone()', function() {
        return it('should create a new Vector with the same values', function() {
          var v1, v2;
          v1 = new Vector(1, 2);
          v2 = v1.clone();
          v2.x = 10;
          return expect(v1.x).not.toEqual(v2.x);
        });
      });
      describe('length()', function() {
        return it('should return the length', function() {
          var v;
          v = new Vector(3, 4);
          return expect(v.length()).toEqual(5);
        });
      });
      describe('add()', function() {
        return it('should add another vector to this one', function() {
          var ret, v;
          v = new Vector(3, 4);
          ret = v.add(new Vector(3, 4));
          expect(v.x).toEqual(6);
          expect(v.y).toEqual(8);
          return expect(ret).toBe(v);
        });
      });
      describe('subtract()', function() {
        return it('should subtract another vector from this one', function() {
          var ret, v;
          v = new Vector(3, 4);
          ret = v.subtract(new Vector(1, 2));
          expect(v.x).toEqual(2);
          expect(v.y).toEqual(2);
          return expect(ret).toBe(v);
        });
      });
      describe('scale()', function() {
        return it('should multiply a vector by a scalar', function() {
          var ret, v;
          v = new Vector(2, 4);
          ret = v.scale(1.5);
          expect(v.x).toEqual(3);
          expect(v.y).toEqual(6);
          return expect(ret).toBe(v);
        });
      });
      describe('normalize()', function() {
        return it('should force the vector to a length of 1', function() {
          var ret, v;
          v = new Vector(100, 0);
          ret = v.normalize();
          expect(v.x).toEqual(1);
          expect(v.y).toEqual(0);
          expect(v.length()).toEqual(1);
          return expect(ret).toBe(v);
        });
      });
      return describe('distance()', function() {
        return it('should retun the distance from another vector', function() {
          var v1, v2;
          v1 = new Vector(5, 0);
          v2 = new Vector(5, 5);
          return expect(v1.distance(v2)).toEqual(5);
        });
      });
    });
    return it('should be chainable', function() {
      var v;
      v = new Vector(10, 0).normalize().add(Vector.up()).scale(10);
      expect(v.x).toEqual(10);
      return expect(v.y).toEqual(10);
    });
  });
}).call(this);

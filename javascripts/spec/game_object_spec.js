(function() {
  describe('GameObject', function() {
    var obj;
    obj = null;
    beforeEach(function() {
      return obj = new GameObject();
    });
    it('should have a position', function() {
      expect(obj.pos).toBeTruthy;
      expect(typeof obj.pos.x).toEqual('number');
      return expect(typeof obj.pos.y).toEqual('number');
    });
    it('should have a velocity', function() {
      expect(obj.vel).toBeTruthy;
      expect(typeof obj.vel.x).toEqual('number');
      return expect(typeof obj.vel.y).toEqual('number');
    });
    it('should have a acceleration', function() {
      expect(obj.accel).toBeTruthy;
      expect(typeof obj.accel.x).toEqual('number');
      return expect(typeof obj.accel.y).toEqual('number');
    });
    return describe('update()', function() {
      afterEach(function() {
        obj.pos = Vector.zero();
        obj.vel = Vector.zero();
        return obj.accel = Vector.zero();
      });
      it('should apply drag the vel', function() {
        obj.vel = v(0, 100);
        obj.update();
        return expect(obj.vel.length).toBeLessThan(100);
      });
      it('should add accel into vel', function() {
        obj.accel = v(0, 100);
        obj.update();
        return expect(obj.vel.length).toBeGreaterThan(0);
      });
      it('should enforce a speed limit', function() {
        obj.vel = v(0, 100000);
        obj.update();
        return expect(obj.vel.length).toEqual(350);
      });
      it('should add vel into pos', function() {
        obj.vel = v(0, 100);
        obj.update();
        return expect(obj.pos.length).toBeGreaterThan(0);
      });
      return it('should bounce off stage boundaries', function() {
        obj.pos = v(0, 101);
        obj.vel = v(0, 50);
        obj.update();
        expect(obj.pos.y).toEqual(95);
        return expect(obj.vel.y).toBeLessThan(0);
      });
    });
  });
}).call(this);

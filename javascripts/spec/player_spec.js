(function() {
  describe('Player', function() {
    var player;
    player = null;
    beforeEach(function() {
      return player = Game.game.stage.player;
    });
    it('should have a position', function() {
      expect(player.pos).toBeTruthy;
      expect(typeof player.pos.x).toEqual('number');
      return expect(typeof player.pos.y).toEqual('number');
    });
    it('should have a velocity', function() {
      expect(player.vel).toBeTruthy;
      expect(typeof player.vel.x).toEqual('number');
      return expect(typeof player.vel.y).toEqual('number');
    });
    it('should have a acceleration', function() {
      expect(player.accel).toBeTruthy;
      expect(typeof player.accel.x).toEqual('number');
      return expect(typeof player.accel.y).toEqual('number');
    });
    return describe('update()', function() {
      afterEach(function() {
        player.pos = Vector.zero();
        player.vel = Vector.zero();
        return player.accel = Vector.zero();
      });
      it('should apply drag the vel', function() {
        player.vel = v(0, 100);
        player.update();
        return expect(player.vel.length).toBeLessThan(100);
      });
      it('should add accel into vel', function() {
        player.accel = v(0, 100);
        player.update();
        return expect(player.vel.length).toBeGreaterThan(0);
      });
      it('should enforce a speed limit', function() {
        player.vel = v(0, 100000);
        player.update();
        return expect(player.vel.length).toEqual(350);
      });
      it('should add vel into pos', function() {
        player.vel = v(0, 100);
        player.update();
        return expect(player.pos.length).toBeGreaterThan(0);
      });
      return it('should warp the pos to the other side when out of bounds', function() {
        player.pos = v(0, 101);
        player.update();
        return expect(player.pos.y).toEqual(-99);
      });
    });
  });
}).call(this);

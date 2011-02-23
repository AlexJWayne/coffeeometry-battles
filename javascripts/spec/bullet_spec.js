(function() {
  describe('Bullet', function() {
    var bullet;
    bullet = null;
    beforeEach(function() {
      return bullet = new Bullet(v(10, 10), v(20, 20));
    });
    it('should be at position', function() {
      expect(bullet.pos.x).toEqual(10);
      return expect(bullet.pos.y).toEqual(10);
    });
    it('should be pointed toward target', function() {
      expect(bullet.vel.angle).not.toEqual(45);
      expect(bullet.vel.angle).toBeLessThan(50);
      return expect(bullet.vel.angle).toBeGreaterThan(40);
    });
    return it('should expire when it slows down', function() {
      Game.game.stage.gameObjects.push(bullet);
      expect(Game.game.stage.gameObjects.indexOf(bullet)).toBeGreaterThan(-1);
      bullet.vel.length = 49;
      bullet.update();
      return expect(Game.game.stage.gameObjects.indexOf(bullet)).toEqual(-1);
    });
  });
}).call(this);

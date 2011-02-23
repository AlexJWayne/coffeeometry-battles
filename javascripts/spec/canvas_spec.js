(function() {
  describe('Canvas', function() {
    beforeEach(function() {
      return this.canvas = new Canvas;
    });
    it('should have an id', function() {
      return expect(this.canvas.id).toEqual('canvas');
    });
    it('should have a node', function() {
      return expect(this.canvas.node).toBe(document.getElementById(this.canvas.id));
    });
    it('should have a ctx', function() {
      return expect(this.canvas.ctx).toBe(document.getElementById(this.canvas.id).getContext('2d'));
    });
    return describe('toGamePos()', function() {
      return it('should translate screen position to game position', function() {
        var gamePos;
        gamePos = this.canvas.toGamePos(v(300, 300));
        expect(gamePos.length).toEqual(0);
        gamePos = this.canvas.toGamePos(v(60, 300));
        expect(gamePos.x).toEqual(-160);
        expect(gamePos.y).toEqual(0);
        gamePos = this.canvas.toGamePos(v(300, 60));
        expect(gamePos.x).toEqual(0);
        expect(gamePos.y).toEqual(160);
        gamePos = this.canvas.toGamePos(v(540, 540));
        expect(gamePos.x).toEqual(160);
        return expect(gamePos.y).toEqual(-160);
      });
    });
  });
}).call(this);

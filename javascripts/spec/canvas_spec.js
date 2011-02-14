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
    return it('should have a ctx', function() {
      return expect(this.canvas.ctx).toBe(document.getElementById(this.canvas.id).getContext('2d'));
    });
  });
}).call(this);

(function() {
  this.Canvas = (function() {
    function Canvas(id) {
      this.id = id != null ? id : 'canvas';
      this.node = document.getElementById(this.id);
      this.ctx = this.node.getContext('2d');
      this.ctx.translate(this.node.width / 2, this.node.height / 2);
      this.ctx.scale(this.node.width / 200, -this.node.height / 200);
    }
    Canvas.prototype.clear = function() {
      return this.ctx.clearRect(-100, -100, 200, 200);
    };
    return Canvas;
  })();
  CanvasRenderingContext2D.prototype.fillCircle = function(center, radius) {
    this.beginPath();
    this.arc(center.x, center.y, radius, 0, Math.PI * 2, true);
    this.closePath();
    return this.fill();
  };
}).call(this);

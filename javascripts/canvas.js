(function() {
  this.Canvas = (function() {
    function Canvas(id) {
      this.id = id != null ? id : 'canvas';
      this.node = document.getElementById(this.id);
      this.ctx = this.node.getContext('2d');
      this.ctx.translate(this.node.width / 2, this.node.height / 2);
      this.ctx.scale(this.node.width / 200, this.node.height / 200);
    }
    Canvas.prototype.draw = function() {
      this.ctx.fillStyle = "rgb(200,0,0)";
      this.ctx.fillCircle(v(-100, -100), 10);
      this.ctx.fillCircle(v(100, 100), 10);
      return this.ctx.fillCircle(v(0, 0), 10);
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

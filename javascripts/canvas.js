(function() {
  this.Canvas = (function() {
    function Canvas(id) {
      this.id = id != null ? id : 'canvas';
      this.node = document.getElementById(this.id);
      this.ctx = this.node.getContext('2d');
      this.ctx.translate(this.node.width / 2, this.node.height / 2);
    }
    Canvas.prototype.draw = function() {
      this.ctx.fillStyle = "rgb(200,0,0)";
      this.ctx.fillCircle(new Vector(-90, -90), 10);
      return this.ctx.fillCircle(new Vector(90, 90), 10);
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

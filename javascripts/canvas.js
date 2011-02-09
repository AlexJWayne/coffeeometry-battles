(function() {
  this.Canvas = (function() {
    function Canvas(id) {
      this.id = id != null ? id : 'canvas';
      this.node = document.getElementById(this.id);
      this.ctx = this.node.getContext('2d');
    }
    Canvas.prototype.draw = function() {
      this.ctx.fillStyle = "rgb(200,0,0)";
      return this.ctx.fillRect(10, 10, 50, 50);
    };
    return Canvas;
  })();
}).call(this);

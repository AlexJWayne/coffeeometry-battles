class @Canvas
  constructor: (@id = 'canvas') ->
    @node = document.getElementById @id
    @ctx  = @node.getContext '2d'
    @ctx.translate @node.width/2, @node.height/2
    
  draw: ->
    
    @ctx.fillStyle = "rgb(200,0,0)"
    @ctx.fillCircle new Vector(-90, -90), 10
    @ctx.fillCircle new Vector( 90,  90), 10

CanvasRenderingContext2D::fillCircle = (center, radius) ->
  @beginPath()
  @arc center.x, center.y, radius, 0, Math.PI*2, true
  @closePath()
  @fill()
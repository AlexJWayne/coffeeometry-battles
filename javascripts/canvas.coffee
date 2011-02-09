class @Canvas
  constructor: (@id = 'canvas') ->
    @node = document.getElementById @id
    @ctx  = @node.getContext '2d'
  
    # Setup coordinate system, centered and 100 units in each direction
    @ctx.translate @node.width/2,   @node.height/2
    @ctx.scale     @node.width/200, @node.height/200
    
  draw: ->
    
    @ctx.fillStyle = "rgb(200,0,0)"
    @ctx.fillCircle v(-100, -100), 10
    @ctx.fillCircle v( 100,  100), 10
    @ctx.fillCircle v(   0,    0), 10

CanvasRenderingContext2D::fillCircle = (center, radius) ->
  @beginPath()
  @arc center.x, center.y, radius, 0, Math.PI*2, true
  @closePath()
  @fill()
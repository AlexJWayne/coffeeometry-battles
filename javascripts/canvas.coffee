# Manages the canvas, our rendering surface.

class @Canvas
  constructor: (@id = 'canvas') ->
    # Save the HTML canvas node and its 2d context
    @node = document.getElementById @id
    @ctx  = @node.getContext '2d'
  
    # Setup coordinate system to be centered, with `v(-100,-100)` in the lower
    # left and `v(100,100)` in the top right
    @ctx.translate @node.width/2,    @node.height/2
    @ctx.scale     @node.width/200, -@node.height/200
  
  # Draw one frame
  clear: ->
    @ctx.clearRect -100, -100, 200, 200

#### CanvasRenderingContext2D Extensions

# Draw a circle filled with the current fill color.
CanvasRenderingContext2D::fillCircle = (center, radius) ->
  @beginPath()
  @arc center.x, center.y, radius, 0, Math.PI*2, true
  @closePath()
  @fill()
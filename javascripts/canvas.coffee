class @Canvas
  constructor: (@id = 'canvas') ->
    @node = document.getElementById @id
    @ctx  = @node.getContext '2d'
  
  draw: ->
    @ctx.fillStyle = "rgb(200,0,0)"
    @ctx.fillRect 10, 10, 50, 50
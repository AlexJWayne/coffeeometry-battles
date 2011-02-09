class @Vector
  constructor: (@x = 0, @y = 0) ->

  clone:  -> new Vector(@x, @y)
  length: -> Math.sqrt @x*@x + @y*@y

  add: (other) ->
    @x += other.x
    @y += other.y
    @

  subtract: (other) ->
    @x -= other.x
    @y -= other.y
    @
  
  scale: (scalar) ->
    @x *= scalar
    @y *= scalar
    @

  normalize: ->
    @scale 1/@length()
  
  distance: (other) ->
    @clone().subtract(other).length()
  
  angle: ->
    Math.atan(@y / @x) * 180/Math.PI


@Vector.zero   = -> new Vector()
@Vector.up     = -> new Vector( 0,  1)
@Vector.down   = -> new Vector( 0, -1)
@Vector.left   = -> new Vector(-1,  0)
@Vector.right  = -> new Vector( 1,  0)
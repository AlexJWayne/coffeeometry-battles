class @GameObject
  
  #### Constructor
  constructor: ->
    @color = 'rgb(200, 0, 0)'
    
    # Create physics vectors
    @pos   = Vector.zero()
    @vel   = Vector.zero()
    @accel = Vector.zero()
    
    # Physics constants
    @accelForce = 700
    @dragForce  = 350
    @maxSpeed   = 350
    @radius     = 3
    
  #### Update
  # Runs each frame to update the player.
  update: ->
    # Apply drag
    if @vel.length > @dragForce * Game.perS
      drag = @vel.clone()
      drag.length = @dragForce * Game.perS
      @vel.subtract drag
    else
      @vel.length = 0
    
    # Accelerate
    @vel.add @accel.clone().scale(Game.perS)
    
    # Enforce speed limit
    @vel.length = @maxSpeed if @vel.length > @maxSpeed
    
    # Move
    @pos.add @vel.clone().scale(Game.perS)
    
    # Warp boundaries
    if @pos.x - @radius < -100 && @vel.x < 0
      @pos.x = -100 + @radius
      @vel.x *= -1
    
    if @pos.x + @radius > 100 && @vel.x > 0
      @pos.x = 100 - @radius
      @vel.x *= -1
    
    if @pos.y - @radius < -100 && @vel.y < 0
      @pos.y = -100 + @radius
      @vel.y *= -1
    
    if @pos.y + @radius > 100 && @vel.y > 0
      @pos.y = 100 - @radius
      @vel.y *= -1
    
  #### Render
  # Runs each frame to render the player
  render: (ctx) ->
    ctx.setFillColor @color
    ctx.strokeStyle = "rgba(0,0,0,0)"
    ctx.fillCircle @pos, @radius
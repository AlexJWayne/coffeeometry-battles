class @Player
  
  # Create the keycode to direction mapping
  directionMapping = {
    38: Vector.up()                           # UP
    37: Vector.left()                         # LEFT
    40: Vector.down()                         # DOWN
    39: Vector.right()                        # RIGHT
  }
  
  # Alias WASD keys to point to the same vector objects
  directionMapping[87] = directionMapping[38] # W => UP
  directionMapping[65] = directionMapping[37] # A => LEFT
  directionMapping[83] = directionMapping[40] # S => DOWN
  directionMapping[68] = directionMapping[39] # D => RIGHT
  
  #### Constructor
  constructor: ->
    # Create physics vectors
    @pos   = Vector.zero()
    @vel   = Vector.zero()
    @accel = Vector.zero()
    
    # Physics constants
    @accelForce = 700
    @dragForce  = 350
    @maxSpeed   = 350
    @radius     = 5
    
    #### Key events
    # Add the key's direction on key down.
    document.onkeydown = (e) =>
      direction = directionMapping[e.which]
      if direction? && !direction.active
        direction.active = yes
        @accel.add direction.clone().scale(@accelForce)
      
    # Subtract the key's direction on key up.
    document.onkeyup   = (e) =>
      direction = directionMapping[e.which]
      if direction? && direction.active
        direction.active = no
        @accel.subtract direction.clone().scale(@accelForce)
  
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
    ctx.setFillColor 'rgb(200,0,0)' # red
    ctx.strokeStyle = "rgba(0,0,0,0)"
    ctx.fillCircle @pos, @radius
    
  
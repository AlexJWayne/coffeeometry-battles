class @Player
  
  # Create the keycode to direction mapping
  directionMapping = {
    37: Vector.left()
    38: Vector.up()
    39: Vector.right()
    40: Vector.down()
  }
  
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
    if @pos.x < -100 && @vel.x < 0
      @pos.x = -100
      @vel.x *= -1
    
    if @pos.x > 100 && @vel.x > 0
      @pos.x = 100
      @vel.x *= -1
    
    if @pos.y < -100 && @vel.y < 0
      @pos.y = -100
      @vel.y *= -1
    
    if @pos.y > 100 && @vel.y > 0
      @pos.y = 100
      @vel.y *= -1
    
  #### Render
  # Runs each frame to render the player
  render: (ctx) ->
    ctx.setFillColor 'rgb(200,0,0)' # red
    ctx.fillCircle @pos, 5
    
  
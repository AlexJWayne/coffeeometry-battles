class @Player extends GameObject
  
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
    super()
    @color = 'rgb(0, 200, 0)'
    
    #### Key events
    # Key handler
    handleKey = (isDown, e) ->
      direction = directionMapping[e.which]
      if direction? && ((isDown && !direction.active) || (!isDown && direction.active))
        direction.active = isDown
        @accel[if isDown then 'add' else 'subtract'](direction.clone().scale(@accelForce))
    
    # Add the key's direction on key down.
    document.onkeydown = _(handleKey).bind(this, true)
    
    # Subtract the key's direction on key up.
    document.onkeyup   = _(handleKey).bind(this, false)
  
  #### Update
  # Runs each frame to update the player.
  update: ->
    super()
    
  #### Render
  # Runs each frame to render the player
  render: (ctx) ->
    super(ctx)
    
  
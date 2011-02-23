class @Bullet extends GameObject
  constructor: (pos, target)->
    super()
    @pos = pos.clone()
    @radius = 1.5
    @color  = 'rgb(255, 255, 0)'
    
    @vel = target.clone().subtract @pos
    @vel.length = 500
    @vel.angle += Math.random() * 5 - 2.5
    
  update: ->
    super()
    if @vel.length < 50
      Game.game.stage.gameObjects = _(Game.game.stage.gameObjects).without this
    
    
    
    
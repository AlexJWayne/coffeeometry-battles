class @Stage
  constructor: ->
    @player = new Player()
    @gameObjects = for i in [0...10]
      enemy = new GameObject()
      enemy.dragForce = 0
      enemy.pos = v(Math.random() * 200 - 100, Math.random() * 200 - 100)
      enemy.vel = v(Math.random() * enemy.maxSpeed/2, 0)
      enemy.vel.angle = Math.random() * 360
      enemy
    @gameObjects.push @player
  
  update: ->
    gameObj.update() for gameObj in @gameObjects
    
  render: (ctx) ->
    @renderGrid ctx
    gameObj.render(ctx) for gameObj in @gameObjects
  
  renderGrid: do ->
    renderLines = (ctx, spacing, lw) ->
      ctx.beginPath()
      for i in [-100...100] by spacing
        ctx.moveTo -100, i-lw/2
        ctx.lineTo  100, i-lw/2
        
        ctx.moveTo i-lw/2, -100
        ctx.lineTo i-lw/2,  100
      
      ctx.closePath()
      ctx.stroke()
      
    (ctx) ->
      lw = 200/Game.game.canvas.node.width
      ctx.lineWidth   = lw
      
      ctx.strokeStyle = "#333"
      renderLines ctx, 20/3, lw
            
      ctx.strokeStyle = "#444"      
      renderLines ctx, 20, lw
      
      
class @Stage
  constructor: ->
    @player = new Player()
  
  update: ->
    @player.update()
    
  render: (ctx) ->
    @renderGrid ctx
    @player.render ctx
  
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
      
      
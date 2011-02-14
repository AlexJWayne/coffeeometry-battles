class @Stage
  constructor: ->
    @player = new Player()
  
  update: ->
    @player.update()
    
  render: (ctx) ->
    @player.render(ctx)
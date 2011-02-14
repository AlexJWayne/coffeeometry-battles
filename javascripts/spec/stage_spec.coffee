describe 'Stage', ->
  stage = null;
  beforeEach -> stage = Game.game.stage
  
  it 'should have a player', ->
    expect(stage.player).toBeTruthy
    
  describe 'update', ->
    it 'calls player update', ->
      spyOn stage.player, 'update'
      stage.update()
      expect(stage.player.update).toHaveBeenCalled()
  
  describe 'render', ->
    it 'calls player render', ->
      spyOn stage.player, 'render'
      stage.render()
      expect(stage.player.render).toHaveBeenCalled()
      
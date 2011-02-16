(function() {
  describe('Stage', function() {
    var stage;
    stage = null;
    beforeEach(function() {
      return stage = Game.game.stage;
    });
    it('should have a player', function() {
      return expect(stage.player).toBeTruthy;
    });
    describe('update', function() {
      return it('calls player update', function() {
        spyOn(stage.player, 'update');
        stage.update();
        return expect(stage.player.update).toHaveBeenCalled();
      });
    });
    return describe('render', function() {
      return it('calls player render', function() {
        spyOn(stage.player, 'render');
        stage.render(Game.game.canvas.ctx);
        return expect(stage.player.render).toHaveBeenCalled();
      });
    });
  });
}).call(this);

describe 'Player', ->
  player = null
  beforeEach -> player = Game.game.stage.player
  
  it 'should have a position', ->
    expect(player.pos).toBeTruthy
    expect(typeof player.pos.x).toEqual 'number'
    expect(typeof player.pos.y).toEqual 'number'
  
  it 'should have a velocity', ->
    expect(player.vel).toBeTruthy
    expect(typeof player.vel.x).toEqual 'number'
    expect(typeof player.vel.y).toEqual 'number'
  
  it 'should have a acceleration', ->
    expect(player.accel).toBeTruthy
    expect(typeof player.accel.x).toEqual 'number'
    expect(typeof player.accel.y).toEqual 'number'
  
  describe 'update()', ->
    afterEach ->
      player.pos    = Vector.zero()
      player.vel    = Vector.zero()
      player.accel  = Vector.zero()
    
    it 'should apply drag the vel', ->
      player.vel = v(0, 100)
      player.update()
      expect(player.vel.length).toBeLessThan 100
    
    it 'should add accel into vel', ->
      player.accel = v(0, 100)
      player.update()
      expect(player.vel.length).toBeGreaterThan 0
    
    it 'should enforce a speed limit', ->
      player.vel = v(0, 100000)
      player.update()
      expect(player.vel.length).toEqual 350
    
    it 'should add vel into pos', ->
      player.vel = v(0, 100)
      player.update()
      expect(player.pos.length).toBeGreaterThan 0
    
    it 'should bounce off stage boundaries', ->
      player.pos = v(0, 101)
      player.vel = v(0, 50)
      player.update()
      expect(player.pos.y).toEqual 95
      expect(player.vel.y).toBeLessThan 0

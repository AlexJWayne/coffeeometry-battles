describe 'Bullet', ->
  bullet = null
  
  beforeEach -> bullet = new Bullet v(10,10), v(20,20)
  
  it 'should be at position', ->
    expect(bullet.pos.x).toEqual 10
    expect(bullet.pos.y).toEqual 10
  
  it 'should be pointed toward target', ->
    expect(bullet.vel.angle).not.toEqual 45
    expect(bullet.vel.angle).toBeLessThan 50
    expect(bullet.vel.angle).toBeGreaterThan 40
  
  it 'should expire when it slows down', ->
    Game.game.stage.gameObjects.push bullet
    expect(Game.game.stage.gameObjects.indexOf bullet).toBeGreaterThan -1
    bullet.vel.length = 49
    bullet.update()
    expect(Game.game.stage.gameObjects.indexOf bullet).toEqual -1
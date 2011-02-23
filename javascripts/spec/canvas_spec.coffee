describe 'Canvas', ->
  beforeEach ->
    @canvas = new Canvas
  
  it 'should have an id', ->
    expect(@canvas.id).toEqual 'canvas'
  
  it 'should have a node', ->
    expect(@canvas.node).toBe document.getElementById(@canvas.id)
  
  it 'should have a ctx', ->
    expect(@canvas.ctx).toBe document.getElementById(@canvas.id).getContext('2d')
  
  describe 'toGamePos()', ->
    it 'should translate screen position to game position', ->
      gamePos = @canvas.toGamePos v(300, 300)
      expect(gamePos.length).toEqual 0
      
      gamePos = @canvas.toGamePos v(60, 300)
      expect(gamePos.x).toEqual -160
      expect(gamePos.y).toEqual 0
      
      gamePos = @canvas.toGamePos v(300, 60)
      expect(gamePos.x).toEqual 0
      expect(gamePos.y).toEqual 160
      
      gamePos = @canvas.toGamePos v(540, 540)
      expect(gamePos.x).toEqual 160
      expect(gamePos.y).toEqual -160
    
  
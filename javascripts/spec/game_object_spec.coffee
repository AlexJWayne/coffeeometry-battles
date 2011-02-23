describe 'GameObject', ->
  obj = null
  beforeEach -> obj = new GameObject()
  
  it 'should have a position', ->
    expect(obj.pos).toBeTruthy
    expect(typeof obj.pos.x).toEqual 'number'
    expect(typeof obj.pos.y).toEqual 'number'
  
  it 'should have a velocity', ->
    expect(obj.vel).toBeTruthy
    expect(typeof obj.vel.x).toEqual 'number'
    expect(typeof obj.vel.y).toEqual 'number'
  
  it 'should have a acceleration', ->
    expect(obj.accel).toBeTruthy
    expect(typeof obj.accel.x).toEqual 'number'
    expect(typeof obj.accel.y).toEqual 'number'
  
  describe 'update()', ->
    afterEach ->
      obj.pos    = Vector.zero()
      obj.vel    = Vector.zero()
      obj.accel  = Vector.zero()
    
    it 'should apply drag the vel', ->
      obj.vel = v(0, 100)
      obj.update()
      expect(obj.vel.length).toBeLessThan 100
    
    it 'should add accel into vel', ->
      obj.accel = v(0, 100)
      obj.update()
      expect(obj.vel.length).toBeGreaterThan 0
    
    it 'should enforce a speed limit', ->
      obj.vel = v(0, 100000)
      obj.update()
      expect(obj.vel.length).toEqual 350
    
    it 'should add vel into pos', ->
      obj.vel = v(0, 100)
      obj.update()
      expect(obj.pos.length).toBeGreaterThan 0
    
    it 'should bounce off stage boundaries', ->
      obj.pos = v(0, 101)
      obj.vel = v(0, 50)
      obj.update()
      expect(obj.pos.y).toEqual 97
      expect(obj.vel.y).toBeLessThan 0

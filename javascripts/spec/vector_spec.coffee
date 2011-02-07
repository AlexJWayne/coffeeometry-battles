describe 'Vector', ->
  describe 'constructor', ->
    it 'should accept an x and y', ->
      v = new Vector(13, -109)
      expect(v.x).toEqual 13
      expect(v.y).toEqual -109
    
    it 'should default to zero', ->
      v = new Vector()
      expect(v.x).toEqual 0
      expect(v.y).toEqual 0
  
  describe 'static methods', ->
    it 'Vector.zero() should make a zero length vector', ->
      v = Vector.zero()
      expect(v.x).toEqual 0
      expect(v.y).toEqual 0
  
    it 'Vector.up() should make a zero length vector', ->
      v = Vector.up()
      expect(v.x).toEqual 0
      expect(v.y).toEqual 1
  
    it 'Vector.down() should make a zero length vector', ->
      v = Vector.down()
      expect(v.x).toEqual 0
      expect(v.y).toEqual -1
  
    it 'Vector.left() should make a zero length vector', ->
      v = Vector.left()
      expect(v.x).toEqual -1
      expect(v.y).toEqual 0
  
    it 'Vector.right() should make a zero length vector', ->
      v = Vector.right()
      expect(v.x).toEqual 1
      expect(v.y).toEqual 0
  
  describe 'instance methods', ->
    describe 'clone()', ->
      it 'should create a new Vector with the same values', ->
        v1 = new Vector(1, 2)
        v2 = v1.clone()
        v2.x = 10
        expect(v1.x).not.toEqual v2.x
  
    describe 'length()', ->
      it 'should return the length', ->
        v = new Vector 3, 4
        expect(v.length()).toEqual 5
  
    describe 'add()', ->
      it 'should add another vector to this one', ->
        v = new Vector(3, 4)
        ret = v.add new Vector(3, 4)
        expect(v.x).toEqual 6
        expect(v.y).toEqual 8
        expect(ret).toBe v
  
    describe 'subtract()', ->
      it 'should subtract another vector from this one', ->
        v = new Vector(3, 4)
        ret = v.subtract new Vector(1, 2)
        expect(v.x).toEqual 2
        expect(v.y).toEqual 2
        expect(ret).toBe v
  
    describe 'scale()', ->
      it 'should multiply a vector by a scalar', ->
        v = new Vector(2, 4)
        ret = v.scale 1.5
        expect(v.x).toEqual 3
        expect(v.y).toEqual 6
        expect(ret).toBe v
  
    describe 'normalize()', ->
      it 'should force the vector to a length of 1', ->
        v = new Vector(100, 0)
        ret = v.normalize()
        expect(v.x).toEqual 1
        expect(v.y).toEqual 0
        expect(v.length()).toEqual 1
        expect(ret).toBe v
    
    describe 'distance()', ->
      it 'should return the distance from another vector', ->
        v1 = new Vector(5, 0)
        v2 = new Vector(5, 5)
        expect(v1.distance(v2)).toEqual 5
    
    describe 'angle()', ->
      it 'should return the angle in degrees', ->
        expect(new Vector(1,  1).angle()).toEqual  45
        expect(new Vector(0,  1).angle()).toEqual  90
        expect(new Vector(0, -1).angle()).toEqual -90
  
  it 'should be chainable', ->
    v = new Vector(10, 0)
      .normalize()
      .add(Vector.up())
      .scale(10)
    expect(v.x).toEqual(10)
    expect(v.y).toEqual(10)
  
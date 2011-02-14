describe 'Vector', ->
  describe 'constructor', ->
    it 'should accept an x and y', ->
      v1 = new Vector(13, -109)
      expect(v1.x).toEqual 13
      expect(v1.y).toEqual -109
    
    it 'should default to zero', ->
      v1 = new Vector()
      expect(v1.x).toEqual 0
      expect(v1.y).toEqual 0
  
    it 'should have a convenience shortcut v()', ->
      expect(v().length).toEqual 0
      expect(v(3,4).length).toEqual 5
  
  describe 'static methods', ->
    it 'Vector.zero() should make a zero length vector', ->
      v1 = Vector.zero()
      expect(v1.x).toEqual 0
      expect(v1.y).toEqual 0
  
    it 'Vector.up() should make a zero length vector', ->
      v1 = Vector.up()
      expect(v1.x).toEqual 0
      expect(v1.y).toEqual 1
  
    it 'Vector.down() should make a zero length vector', ->
      v1 = Vector.down()
      expect(v1.x).toEqual 0
      expect(v1.y).toEqual -1
  
    it 'Vector.left() should make a zero length vector', ->
      v1 = Vector.left()
      expect(v1.x).toEqual -1
      expect(v1.y).toEqual 0
  
    it 'Vector.right() should make a zero length vector', ->
      v1 = Vector.right()
      expect(v1.x).toEqual 1
      expect(v1.y).toEqual 0
  
  describe 'instance methods', ->
    describe 'clone()', ->
      it 'should create a v with the same values', ->
        v1 = v(1, 2)
        v2 = v1.clone()
        v2.x = 10
        expect(v1.x).not.toEqual v2.x
  
    describe 'add()', ->
      it 'should add another vector to this one', ->
        v1 = v(3, 4)
        ret = v1.add v(3, 4)
        expect(v1.x).toEqual 6
        expect(v1.y).toEqual 8
        expect(ret).toBe v1
  
    describe 'subtract()', ->
      it 'should subtract another vector from this one', ->
        v1 = v(3, 4)
        ret = v1.subtract v(1, 2)
        expect(v1.x).toEqual 2
        expect(v1.y).toEqual 2
        expect(ret).toBe v1
  
    describe 'scale()', ->
      it 'should multiply a vector by a scalar', ->
        v1 = v(2, 4)
        ret = v1.scale 1.5
        expect(v1.x).toEqual 3
        expect(v1.y).toEqual 6
        expect(ret).toBe v1
  
    describe 'normalize()', ->
      it 'should force the vector to a length of 1', ->
        v1 = v(100, 0)
        ret = v1.normalize()
        expect(v1.x).toEqual 1
        expect(v1.y).toEqual 0
        expect(v1.length).toEqual 1
        expect(ret).toBe v1
    
    describe 'distance()', ->
      it 'should return the distance from another vector', ->
        v1 = v(5, 0)
        v2 = v(5, 5)
        expect(v1.distance(v2)).toEqual 5
    
    describe 'equal()', ->
      it 'should return true for equal vectors', ->
        expect(v(1,2).equal(v(1,2))).toBeTruthy()
      
      it 'should return false for unequal vectors', ->
        expect(v(1,2).equal(v(3,2))).toBeFalsy()
    
    describe 'toString()', ->
      it 'should return a vector string', ->
        expect(v(3,4).toString()).toEqual("<Vector: 3 4>")
    
  describe 'properties', ->
    describe 'angle', ->
      it 'should return the angle in degrees', ->
        expect(v( 1, 1).angle).toEqual  45
        expect(v( 0, 1).angle).toEqual  90
        expect(v( 0,-1).angle).toEqual 270
        expect(v(-1,-1).angle).toEqual 225
      
      it 'should set the angle in degrees', ->
        v1 = v(0,1000)
        v1.angle = 45
        expect(Math.round v1.angle).toEqual 45
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = 90
        expect(Math.round v1.angle).toEqual 90
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = 135
        expect(Math.round v1.angle).toEqual 135
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = 180
        expect(Math.round v1.angle).toEqual 180
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = 225
        expect(Math.round v1.angle).toEqual 225
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = -90
        expect(Math.round v1.angle).toEqual 270
        expect(Math.round v1.length).toEqual 1000
        
        v1.angle = -45
        expect(Math.round v1.angle).toEqual 315
        expect(Math.round v1.length).toEqual 1000
      
    describe 'length', ->
      it 'should return the length', ->
        v1 = v(3,4)
        expect(v1.length).toEqual 5
      
      it 'should set the length', ->
        v1 = v(3,4)
        v1.scale 10
        expect(v1.length).toEqual 50
        v1.length = 5
        expect(v1.length).toEqual 5
        expect(v1.x).toEqual 3
        expect(v1.y).toEqual 4
      
      it 'should allow zero to be set for length', ->
        v1 = v(3,4)
        v1.length = 0
        expect(v1.length).toEqual 0
    
  it 'should be chainable', ->
    v1 = v(10, 0)
      .normalize()
      .add(Vector.up())
      .scale(10)
    expect(v1.x).toEqual(10)
    expect(v1.y).toEqual(10)
  
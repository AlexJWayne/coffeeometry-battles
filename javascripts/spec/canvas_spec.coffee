describe 'Canvas', ->
  beforeEach ->
    @canvas = new Canvas
  
  it 'should have an id', ->
    expect(@canvas.id).toEqual 'canvas'
  
  it 'should have a node', ->
    expect(@canvas.node).toBe document.getElementById(@canvas.id)
  
  it 'should have a ctx', ->
    expect(@canvas.ctx).toBe document.getElementById(@canvas.id).getContext('2d')
  
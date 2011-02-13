# Main application singleton.  Handles initialization and all game state.
class @Game

  #### Initialization

  # Set a list of scripts that we have to load.
  requires = [
    'lib/underscore'
    'vector'
    'canvas'
  ]
  
  # Create the singleton instance.
  constructor: ->
    Game.game = this
    @load()
  
  # Load scripts, then initialize the game when ready.  If a spec run is
  # desired, then start it.
  load: ->
    # Save a cache buster
    now = new Date().getTime()
    
    # Inflate js script names into full paths
    scripts = for script in requires
      "javascripts/#{script}.js?#{now}"
    
    # Add specs in if this is a spec run
    if Game.runSpecs
      # Add jasmine framework
      scripts.push 'javascripts/lib/jasmine/jasmine.js', 'javascripts/lib/jasmine/jasmine-html.js'
      scripts.push "javascripts/spec/#{script}_spec.js?#{now}" for script in requires when !script.match /(^|\/)lib\//
      
      # Add jasmine stylesheet
      document.getElementsByTagName("head")[0].appendChild do ->
        link = document.createElement 'link'
        link.type   = 'text/css'
        link.rel    = 'stylesheet'
        link.href   = 'javascripts/lib/jasmine/jasmine.css'
        link.media  = 'screen'
        link
    
    # Load the scripts
    head.js scripts..., =>
      
      # Setup the game
      @init()
      
      # Run specs
      if Game.runSpecs
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter())
        jasmine.getEnv().execute()
  
  # Initialize the game after all scripts are loaded.
  init: ->
    # Get canvas and rendering context.
    @canvas = new Canvas()
    @ctx    = @canvas.ctx
    @fps    = 60
    
    # Start the main game loop
    @timer  = setInterval =>
      @update()
      @render()
    , 1000/@fps
  
  update: ->
    @ctx.rotate 10/@fps * Math.PI/180
    
  render: ->
    @canvas.draw()
  
  
# If the index page url has a query string, it means a spec run is expected.
@Game.runSpecs = window.location.href.indexOf('?') > 0
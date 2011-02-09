# Main application singleton
class @Game
  
  # All scripts required
  requires = [
    'lib/underscore'
    'vector'
    'canvas'
  ]
  
  # Create the singleton instance
  constructor: ->
    Game.game = this
    @load()
  
  # Load scripts, and run specs
  load: ->
    # Save a cache buster
    now = new Date().getTime()
    
    # Inflate js script names into full paths
    scripts = ("javascripts/#{script}.js?#{now}" for script in requires)
    
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
  
  init: ->
    @canvas = new Canvas()
    @ctx    = @canvas.ctx
  
  

# A query string present means to run specs
@Game.runSpecs = window.location.href.indexOf('?') > 0
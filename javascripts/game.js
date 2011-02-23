(function() {
  var __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.Game = (function() {
    var requires;
    requires = ['lib/underscore', 'vector', 'canvas', 'stage', 'game_object', 'player', 'bullet'];
    function Game() {
      Game.game = this;
      this.load();
    }
    Game.prototype.load = function() {
      var now, script, scripts, _i, _len;
      now = new Date().getTime();
      scripts = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = requires.length; _i < _len; _i++) {
          script = requires[_i];
          _results.push("javascripts/" + script + ".js?" + now);
        }
        return _results;
      })();
      if (Game.runSpecs) {
        scripts.push('javascripts/lib/jasmine/jasmine.js', 'javascripts/lib/jasmine/jasmine-html.js');
        for (_i = 0, _len = requires.length; _i < _len; _i++) {
          script = requires[_i];
          if (!script.match(/(^|\/)lib\//)) {
            scripts.push("javascripts/spec/" + script + "_spec.js?" + now);
          }
        }
        document.getElementsByTagName("head")[0].appendChild((function() {
          var link;
          link = document.createElement('link');
          link.type = 'text/css';
          link.rel = 'stylesheet';
          link.href = 'javascripts/lib/jasmine/jasmine.css';
          link.media = 'screen';
          return link;
        })());
      }
      return head.js.apply(head, __slice.call(scripts).concat([__bind(function() {
        this.init();
        if (Game.runSpecs) {
          jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
          return jasmine.getEnv().execute();
        }
      }, this)]));
    };
    Game.prototype.init = function() {
      this.canvas = new Canvas();
      this.ctx = this.canvas.ctx;
      this.stage = new Stage();
      return this.start();
    };
    Game.prototype.start = function() {
      if (!this.timer) {
        return this.timer = setInterval(__bind(function() {
          this.update();
          return this.render();
        }, this), Game.perMS);
      }
    };
    Game.prototype.stop = function() {
      clearInterval(this.timer);
      return this.timer = null;
    };
    Game.prototype.update = function() {
      return this.stage.update();
    };
    Game.prototype.render = function() {
      this.canvas.clear();
      return this.stage.render(this.ctx);
    };
    return Game;
  })();
  Game.fps = 60;
  Game.perS = 1 / Game.fps;
  Game.perMS = 1000 / Game.fps;
  this.Game.runSpecs = window.location.href.indexOf('?') > 0;
}).call(this);

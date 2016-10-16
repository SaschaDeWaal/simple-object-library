"use strict";

let engine = {
  objects : require('./objects.js'),
  loops : require('./loops.js'),
  searchTools: require('./searchTools.js')
}

//start
engine.objects.start(engine);
engine.loops.start(engine);
engine.searchTools.start(engine); 


module.exports = engine;
let engine = null;

let loops = {
  
  start: (_engine) => {
    engine = _engine;
    loops.mainLoop();
  },
  
  mainLoop: () => {
    
    let allObjects = engine.objects.getObjects();
    
    for(let i = 0; i < allObjects.length; i++){
      if (allObjects[i].update !== undefined) allObjects[i].update();
    }
    
    for(let i = 0; i < allObjects.length; i++){
      if (allObjects[i].draw !== undefined) allObjects[i].draw();
    }
    
    for(let i = 0; i < allObjects.length; i++){
      if (allObjects[i].lateUpdate !== undefined) allObjects[i].lateUpdate();
    }
    
     
    window.requestAnimationFrame(loops.mainLoop);
  }
  
}

module.exports = loops;
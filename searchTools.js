let engine = null;

let searchTools = {
  
  start: (_engine) => {
    engine = _engine;
  },
  
  byName: (name) => {
    return searchTools.byAtributeValue('name', name);
  },
  
  byContainMethode: (methodeName) => {
    let objects = engine.objects.getObjects();
    let found = [];
        
    for(var i = 0; i < objects.length; i++){
      if (typeof objects[i][methodeName] === 'function') found.push(objects[i]);
    }
    
    return found;
  },
  
  byContainAtribute: (atributeName) => {
    let objects = engine.objects.getObjects();
    let found = [];
    
    for(var i = 0; i < objects.length; i++){
      if (objects[i][atributeName] !== undefined && typeof objects[i][atributeName] !== 'function') found.push(objects[i]);
    }
    
    return found;
  },
  
  byAtributeValue: (atributeName, value) => {
    let objects = searchTools.byContainAtribute(atributeName);
    let found = [];
    
    for(var i = 0; i < objects.length; i++){
      if (objects[i][atributeName] === value) found.push(objects[i]);
    }
    
    return found;
  }
  
}

module.exports = searchTools;
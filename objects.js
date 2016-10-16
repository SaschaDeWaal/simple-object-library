let objects = [];
let classes = {};
let engine = null;

let objectsManagement = {
  
  start: (_engine) => {
    engine = _engine;
  },
  
  addClass: (name, obj) => {
    classes[name] = obj
  },
  
  create: (name) => {
    let newObject = classes[name]();
    
    newObject.name = name;
    
    //call startups
    if (newObject.setup !== undefined) newObject.setup(engine, name);
    if (newObject.awake !== undefined) newObject.awake();
    if (newObject.start !== undefined) newObject.start();
    
    objects.push(newObject);
        
    return newObject;
  },
  
  destroy: (obj) => {
    let index = -1;
    
    for(let i = 0; i < objects.length; i++){
      if (objects[i] == obj) index = i;
    }
        
    if (index > -1){
      if (objects[index].onDestroy !== undefined) objects[index].onDestroy();
      objects[index] = {};
      objects.splice(index, 1);
    }     
  },
  
  getObjects: () => {
    return objects;
  }
}

module.exports = objectsManagement;
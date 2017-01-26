var pathToList = function(path) {
  return path.split('/').filter(function(item) {
    return (item != '') 
  })
}
exports.pathToList = pathToList;
var notDiscovered = function(key) {
  return (key !== '__discovered')
};
exports.notDiscovered = notDiscovered;

var merge = function (from,to) {
  Object.keys(from).forEach(function (key) {
    if ((to !== undefined) && (to[key] !== undefined)) {
        if (from[key] !== undefined)
            merge(from[key], to[key])
    } else if (to !== undefined)
        to[key] = from[key]
  })
}
exports.merge = merge
var createPath = function(list,obj) {
  var newobj = {}
  if (list.length == 0) {
      return obj
  } else if (list.length > 0) {
      newobj[list[0]] = obj
      list.shift()
      return createPath(list,newobj)
  }
}
exports.createPath = createPath
function f(o) {
  if(typeof o == "string"){
    var tmp = o; o = {}; o[tmp] = {}; 
  } 
  return (o !== undefined) ? Object.keys(o).map(function(k){ 
    return { name: k, children: f(o[k]) }; 
  }) : []
} 
exports.toDescriptiveTree = f

// the o!==undefined else [] handles this case
/*
var util = require('util')
var z = {a:{b:undefined}}
var res = f(z)
console.log(util.inspect(res,{depth:null}))
*/

const merge = function (from,to) {
  Object.keys(from).forEach(function (key) {
    if ((to !== undefined) && (to[key] !== undefined)) {
        if (from[key] !== undefined)
            merge(from[key], to[key])
    } else if (to !== undefined)
        to[key] = from[key]
  })
}
exports.merge = merge
const createPath = function(list,obj,idx) {
  let newobj = {};
  if (idx === 0) {
    return obj;
  } else {
    idx--;
    newobj[list[idx]] = obj
    return createPath(list,newobj, idx)
  }
}
exports.createPath = createPath

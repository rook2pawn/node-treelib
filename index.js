var lib = require('./lib')
var util = require('util')
var traverse = require('traverse')
var Treelib = function(tree) {
  if (!(this instanceof Treelib)) {
    return new Treelib(tree)
  }
	if (tree === undefined)
		this._tree = {}
  else 
    this._tree = tree
  var pathToList = function(path) {
    if (path.indexOf('/') === 0)
      path = path.slice(1)
		return path.split('/')
  }
	this.currentBranch = {}
	this.setCurrentBranch = function(path) {
    if (!Array.isArray(path))
      var list = pathToList(path)
    else 
      var list = path
    var branch = this._tree
    var i = 0
    for (i = 0; i < list.length; i++) {
      var curr = branch[list[i]]
      if ((curr !== undefined) && (typeof curr =='object')) {
          branch = curr
      } else {
          break
      }
    }
    this.currentBranch.branch = branch
    this.currentBranch.leaf = list[list.length-1]
  }
  this.checkPath = function(path) {
    if (!Array.isArray(path))
      var list = pathToList(path)
    else 
      var list = path
    var branch = this._tree
    var depth = 0
    var validPath = []
    var i = 0
    var hits = 0;
    for (i = 0; i < list.length; i++) {
      if (branch.hasOwnProperty(list[i])) {
        hits++
        validPath.push(list[i])
      }
      if (branch[list[i]] !== undefined) {
        branch = branch[list[i]]
      } else {
        break
      }
    }
    var fullPath = (hits === (list.length))
    return {depth:validPath.length,validPath:validPath,fullPath:fullPath}
  }
	this.addPath = function(path) {
    if (!Array.isArray(path))
      var list = pathToList(path)
    else 
      var list = path
		var newPath = lib.createPath(list.slice(0).reverse())
		lib.merge(newPath,this._tree)
		this.setCurrentBranch(path)
	}
  this.getValue = function(path) {
    if (!Array.isArray(path))
      var list = pathToList(path)
    else 
      var list = path
		var result = this.checkPath(path)
		if (!result.fullPath)
			return undefined
		var branch = this._tree
		for (var i = 0; i < list.length; i++) {
			branch = branch[list[i]]
		}
		return branch
  }
	var blend = function(obj1,obj2) {
		lib.merge(obj1,obj2)
		lib.merge(obj2,obj1)
	}
  this.clearValue = function(path) {
    if (!Array.isArray(path))
      var list = pathToList(path)
    else 
      var list = path
		var result = this.checkPath(path)
		var branch = this._tree
		var i = 0
		for (i = 0; i < list.length; i++) {
			if (i < (list.length-1))
			branch = branch[list[i]]
		}
		branch[list[i-1]] = undefined
  }
	this.setValue = function(val) {
		this.currentBranch.branch[this.currentBranch.leaf] = val
		this.currentBranch.val = val
    return this
	}
	this.path = function (path) {
	  var result = this.checkPath(path)
    if (!result.fullPath) {
      this.addPath(path)
    } else { 
      this.setCurrentBranch(path)
    }
		return this
	}
  this.incr = function(path) {
    this.path(path)
    var val = this.getValue(path)
    if (val === undefined)
      val = 0
    val++
    this.setValue(val)
    return val
  }
	this.setConfig = function(obj) {
		for (var i in obj) {
			config[i] = obj[i]
		}
	}
	this.show = function() {
		console.log(util.inspect(this._tree,{depth:null,colors:true}))
		return this
	}
  this.setTree = function(_tree) {
    this._tree = _tree
  }
	this.tree = function() {
		return this._tree
	}
	this.clear = function() {
		this._tree = {}
		return this
	}
	this.history = function() {
		return history
	}
  this.leafs = function() { 
    var leaves = [];
    traverse(this._tree).forEach(function(obj) {
      console.log("TRAVERSE:", obj)
      if ((this.isLeaf) && (typeof obj == 'object'))
        leaves.push(obj)
    })
    return leaves
  }
}
module.exports = exports = Treelib

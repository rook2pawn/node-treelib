// merges from into to
var merge = function (from,to) {
	Object.keys(from).forEach(function (key) {
		if ((to !== undefined) && (to[key] !== undefined)) {
			if (from[key] !== undefined) 
				merge(from[key], to[key])	
		} else if (to !== undefined)
			to[key] = from[key];
	});
};
var blend = function(obj1,obj2) {
	merge(obj1,obj2);
	merge(obj2,obj1);
};

var a = {2:{3:{4:undefined}}};
var b = {2:{'cat':undefined}};
var c = {2:{'cat':{'dog':undefined}}};

merge(a,b);
console.log("b:"); console.log(b);
console.log("-----");
merge(b,c);
console.log("c:"); 
console.log(c);

if (!Array.prototype.forEach) {
	console.log('Defined "forEach" function for arrays');
	Array.prototype.forEach = function(func) {
		if (typeof func != "function")
			throw new TypeError();

		for (var i = 0; i < this.length; i++) {
			func(this[i], i);
		}
	};
}

if (!Array.prototype.map) {
	console.log('Defined "map" function for arrays');
	Array.prototype.map = function(func) {
		if (typeof func != "function")
			throw new TypeError();
		
		var result = [];
		for (var i = 0; i < this.length; i++) {
			result[i] = func(this[i]);
		}
		
		return result;
	};
}
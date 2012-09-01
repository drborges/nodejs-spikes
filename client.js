var net = require('net');

exports.create = function(port) {
	port = port || 3030;
	var socket = {};
	
	return {
		connect: function() {
			var self = this;
			socket = net.connect({port: port}, function() {
				console.log('[Client] connected to localhost:' + port);
			});
			
			socket.on('data', function(data) {
				self.receive(data);
			});
			
			return self;
		},
		
		receive: function(data) {
			console.log('[Client] server said: ' + data);
		},
		
		send: function(data) {
			socket.write(data);
		}
	};
};
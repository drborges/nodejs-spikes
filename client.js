var net = require('net');

exports.create = function(port) {
	port = port || 3030;
	var socket = {};
	var process_data = function(data) {
		console.log('[Client] server said: ' + data);
	};
	
	return {
		connect: function() {
			var self = this;
			socket = net.connect({port: port}, function() {
				console.log('[Client] connected to localhost:' + port);
			});
			
			socket.on('data', function(data) {
				process_data(data);
			});
			
			return self;
		},
		
		
		send: function(data) {
			socket.write(data);
		}
	};
};
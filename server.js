var net = require('net');

exports.create = function(port) {
	port = port || 3030;
	var server = net.createServer();
	
	var handle_connection = function(socket) {
		console.log('[Server] client connected.');
		socket.write("Welcome to the server!");
		socket.on('data', function(msg) {
			handle_client_message(msg);
		});
	};
	
	var handle_client_message = function(msg) {
		console.log('[Server] client said: ' + msg);
	};

	return {
		start: function() {
			server.listen(port, function() {
				console.log('[Server] listening on port: ' + port);
			});
			
			server.on('connection', function(socket) {
				handle_connection(socket);
			});
		},
		
		stop: function() {
			server.end();
		}
	};
};
require('./arrays');
var net = require('net');

exports.create = function(port) {
	port = port || 3030;
	var clients = [];
	var socket = net.createServer();
	
	var process_data = function(data) {
		console.log('[Server] client said: ' + data);
	};
	var handle_connection = function(socket) {
		console.log('[Server] client connected.');
		clients.push(socket);
		socket.write("Welcome to my first nodeJS server!");
		socket.on('data', function(data) {
			process_data(data);
		});
	};

	return {
		start: function() {
			socket.listen(port, function() {
				console.log('[Server] listening on port: ' + port);
			});
			
			socket.on('connection', function(socket) {
				handle_connection(socket);
			});
		},
		
		send: function(data) {
			clients.forEach(function(client) {
				client.write(data);
			});
		},
		
		stop: function() {
			socket.end();
		}
	};
};
var server = require('./server');
var client = require('./client');

var my_server = server.create();
var client1 = client.create(3030);
var client2 = client.create(3030);

my_server.start();
client1.connect().send("Well Hello There! client1 here...");
client2.connect().send("Well Hello There! client2 here...");

setTimeout(function () {
	my_server.send("ping!!");
}, 500);
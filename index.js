var server = require('./server');
var client = require('./client');

var my_server = server.create();
var my_client = client.create(3030);

my_server.start("Welcome to the coolest server EVA!");
my_client.connect().send("Well Hello There!");
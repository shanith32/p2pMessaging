var Peer = require("simple-peer");
var wrtc = require("wrtc");

var peer1 = new Peer({ initiator: true, wrtc: wrtc });
var peer2 = new Peer({ wrtc: wrtc });

peer1.on("signal", function(data) {
  // when peer1 has signaling data, give it to peer2 somehow
  peer2.signal(data);
});

peer2.on("signal", function(data) {
  // when peer2 has signaling data, give it to peer1 somehow
  peer1.signal(data);
});

peer1.on("connect", function() {
  // wait for 'connect' event before using the data channel
  peer1.send("Very nice");
});

peer2.on("data", function(data) {
  // got a data channel message
  console.log("got a message from peer1: " + data);
});

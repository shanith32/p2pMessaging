(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},32:function(e,t,n){},49:function(e,t){},51:function(e,t){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),o=n.n(s),i=(n(31),n(19)),l=n(20),u=n(24),c=n(21),h=n(25),p=(n(32),n(22)),m=n.n(p),g=n(23),d=n.n(g),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleConnectChange=function(e){n.setState({otherPeer:e.target.value})},n.handleConnectSubmit=function(e){e.preventDefault(),console.log("OtherPeer: ",n.state.otherPeer),n.state.peer.signal(JSON.parse(n.state.otherPeer))},n.handleSendChange=function(e){n.setState({inputMessages:e.target.value})},n.handleSendSubmit=function(e){e.preventDefault(),console.log("Input Message: ",n.state.inputMessages),n.state.peer.send(n.state.inputMessages)},n.state={peer:new m.a({initiator:"#1"===window.location.hash,trickle:!1,wrtc:d.a}),thisPeer:" ",otherPeer:" ",inputMessages:" ",outputMessages:" "},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.peer;return t.on("error",function(e){return console.log("Error: ",e)}),t.on("signal",function(t){var n=JSON.stringify(t);console.log("This Peer: ",n),e.setState({thisPeer:n})}),t.on("data",function(t){var n=String.fromCharCode.apply(null,t);console.log("Output Message: ",n),e.setState({outputMessages:n})}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Your ID:"),r.a.createElement("textarea",{value:this.state.thisPeer}),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleConnectSubmit},r.a.createElement("p",null,"Other ID:"),r.a.createElement("textarea",{type:"text",value:this.state.otherPeer,onChange:this.handleConnectChange}),r.a.createElement("input",{type:"submit",value:"Connect"})),r.a.createElement("form",{onSubmit:this.handleSendSubmit},r.a.createElement("p",null,"Send Message:"),r.a.createElement("textarea",{type:"text",value:this.state.inputMessages,onChange:this.handleSendChange}),r.a.createElement("input",{type:"submit",value:"Send"})),r.a.createElement("h1",{className:"p-3 mb-2 bg-info text-white"},this.state.outputMessages)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(56);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9f01717a.chunk.js.map
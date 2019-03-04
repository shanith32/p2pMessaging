import React, { Component } from "react";
import "./App.css";
import Peer from "simple-peer";
import wrtc from "wrtc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: new Peer({
        initiator: window.location.hash === "#1",
        trickle: false,
        wrtc: wrtc
      }),
      thisPeer: " ",
      otherPeer: " ",
      inputMessages: " ",
      outputMessages: " "
    };
  }

  // For the connection
  handleConnectChange = event => {
    this.setState({ otherPeer: event.target.value });
  };

  handleConnectSubmit = event => {
    event.preventDefault();
    console.log("OtherPeer: ", this.state.otherPeer);
    this.state.peer.signal(JSON.parse(this.state.otherPeer));
  };

  // For sending messages
  handleSendChange = event => {
    this.setState({ inputMessages: event.target.value });
  };

  handleSendSubmit = event => {
    event.preventDefault();
    console.log("Input Message: ", this.state.inputMessages);
    this.state.peer.send(this.state.inputMessages);
  };

  render() {
    // Check for error in the generated peer
    const { peer } = this.state;
    peer.on("error", err => console.log("Error: ", err));

    // Get this peer
    peer.on("signal", data => {
      const thisPeer = JSON.stringify(data);
      console.log("This Peer: ", thisPeer);
      this.setState({ thisPeer });
    });

    // Get received messages
    peer.on("data", data => {
      const outputMessages = String.fromCharCode.apply(null, data);
      console.log("Output Message: ", outputMessages);
      this.setState({ outputMessages });
    });

    return (
      <div className="App">
        <header className="App-header">
          <p>Your ID:</p>
          <textarea value={this.state.thisPeer} />
          <br />
          <form onSubmit={this.handleConnectSubmit}>
            <p>Other ID:</p>
            <textarea
              type="text"
              value={this.state.otherPeer}
              onChange={this.handleConnectChange}
            />
            <input type="submit" value="Connect" />
          </form>
          <form onSubmit={this.handleSendSubmit}>
            <p>Send Message:</p>
            <textarea
              type="text"
              value={this.state.inputMessages}
              onChange={this.handleSendChange}
            />
            <input type="submit" value="Send" />
          </form>
          <h1 className="p-3 mb-2 bg-info text-white">
            {this.state.outputMessages}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

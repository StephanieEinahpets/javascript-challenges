import React, { Component } from "react"

class Greeting extends Component {
  constructor() {
    super()
    this.state = {
      isHello: true,
    }
  }

  toggleGreeting = () => {
    this.setState({ isHello: !this.state.isHello })
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <p>{this.state.isHello ? "Hello" : "Goodbye"}</p>
        <button onClick={this.toggleGreeting} style={{ width: "100px" }}>
          Toggle Me
        </button>
      </div>
    )
  }
}

export default Greeting

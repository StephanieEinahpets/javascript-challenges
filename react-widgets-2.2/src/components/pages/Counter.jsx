import React, { Component } from "react"

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  handleDecrement = () => {
    this.setState((prevState) =>
      prevState.count > 1 ? { count: prevState.count - 1 } : null
    )
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Counter Widget</h1>
        <br />
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter

import { Component } from "react"

class Clock extends Component {
  constructor() {
    super()
    this.state = { time: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ time: new Date() }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <h2 style={{ fontFamily: "monospace", fontSize: "24px" }}>
        {this.state.time.toLocaleTimeString()}
      </h2>
    )
  }
}

export default Clock

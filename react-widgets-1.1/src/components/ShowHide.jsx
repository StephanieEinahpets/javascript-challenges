import React, { Component } from "react"

class ShowHide extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: true,
    }
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible })
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
        {this.state.isVisible && <p>Hide Me</p>}
        <button onClick={this.toggleVisibility} style={{ width: "100px" }}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
      </div>
    )
  }
}

export default ShowHide

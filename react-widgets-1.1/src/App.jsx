import { Component } from "react"
import Counter from "./components/Counter"
import Greeting from "./components/Greeeting"
import ShowHide from "./components/ShowHide"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div>
          <Counter />
          <br />
          <Greeting />
          <br />
          <br />
          <ShowHide />
        </div>
      </div>
    )
  }
}

export default App

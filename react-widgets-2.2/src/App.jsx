import { BrowserRouter } from "react-router-dom"
import "./styles/App.scss"
import Navbar from "./components/navigation/Navbar"
import Routing from "./components/navigation/Routing"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default App

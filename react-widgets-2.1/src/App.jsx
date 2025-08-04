import FontSizer from "./components/FontSizer"
import TextAlign from "./components/TextAlign"
import ClockToggle from "./components/ClockToggle"
import RgbSlider from "./components/RgbSlider.jsx"
import ColorChanger from "./components/ColorChanger"
import Weather from "./components/Weather.jsx"

function App() {
  return (
    <div>
      <FontSizer />
      <br />
      <br />
      <TextAlign />
      <br />
      <br />
      <ColorChanger />
      <br />
      <br />
      <RgbSlider />
      <br />
      <br />
      <ClockToggle />
      <br />
      <br />
      <Weather />
    </div>
  )
}

export default App

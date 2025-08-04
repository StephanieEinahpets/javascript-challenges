import { useState } from "react"

export default function RGBSlider() {
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 })

  const update = (channel, value) => {
    setRgb((prev) => ({ ...prev, [channel]: parseInt(value) }))
  }

  const colorString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

  return (
    <div>
      <h1>RGB Slider Widget</h1>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: colorString,
          border: "1px solid black",
          margin: "0 auto",
          display: "block",
        }}
      />
      <p>
        Red: {rgb.r} | Green: {rgb.g} | Blue: {rgb.b}
      </p>
      <input
        type="range"
        min="0"
        max="255"
        value={rgb.r}
        onChange={(e) => update("r", e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={rgb.g}
        onChange={(e) => update("g", e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={rgb.b}
        onChange={(e) => update("b", e.target.value)}
      />
    </div>
  )
}

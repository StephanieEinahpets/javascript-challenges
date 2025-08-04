import { useState } from "react"

export default function ColorChanger() {
  const [color, setColor] = useState("")
  const [input, setInput] = useState("")

  const updateColor = () => {
    setColor(input)
    setInput("")
  }

  return (
    <div>
      <h1>Color Changer</h1>
      <br />
      <p style={{ color }}>{color || "Your Color Here:"}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={updateColor}>Update</button>
    </div>
  )
}

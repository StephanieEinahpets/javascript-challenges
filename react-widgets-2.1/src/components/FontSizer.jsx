import { useState } from "react"

export default function FontSizer() {
  const [fontSize, setFontSize] = useState(20)

  const grow = () => setFontSize((prev) => Math.min(prev + 5, 100))
  const shrink = () => setFontSize((prev) => Math.max(prev - 5, 0))

  return (
    <div>
      <h2 style={{ fontSize: `${fontSize}px` }}>Resizable Text</h2>
      <button onClick={grow}>Grow</button>
      <button onClick={shrink}>Shrink</button>
    </div>
  )
}

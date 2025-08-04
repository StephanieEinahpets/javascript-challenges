import { useState } from "react"

export default function TextAlignment() {
  const [align, setAlign] = useState("left")

  return (
    <div>
      <p style={{ textAlign: align }}>Alignable Text</p>
      <button onClick={() => setAlign("left")}>Left</button>
      <button onClick={() => setAlign("center")}>Center</button>
      <button onClick={() => setAlign("right")}>Right</button>
    </div>
  )
}

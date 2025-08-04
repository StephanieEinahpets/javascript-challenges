import { useState } from "react"
import ClockWidget from "./ClockWidget"

export default function ClockToggle() {
  const [showClock, setShowClock] = useState(true)

  return (
    <div>
      <h1>Clock Widget</h1>
      <br />
      {showClock && <ClockWidget />}
      <button onClick={() => setShowClock((prev) => !prev)}>
        {showClock ? "Unmount" : "Mount"}
      </button>
    </div>
  )
}

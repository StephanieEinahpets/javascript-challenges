import { useState, useEffect } from "react"

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://wttr.in/?format=j1`)
      .then((res) => res.json())
      .then((data) => {
        const current = data.current_condition[0]
        setWeather({
          temp: current.temp_C,
          feels: current.FeelsLikeC,
          condition: current.weatherDesc[0].value,
        })
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h2>Weather</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Temperature: {weather.temp}°C</p>
          <p>Feels like: {weather.feels}°C</p>
          <p>Condition: {weather.condition}</p>
        </>
      )}
    </div>
  )
}

WeatherWidget

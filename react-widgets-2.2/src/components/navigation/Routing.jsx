import { Switch, Redirect, Route } from "react-router-dom"

import Clock from "../pages/ClockToggle"
import ColorChanger from "../pages/ColorChanger"
import Counter from "../pages/Counter"
import FontSizer from "../pages/FontSizer"
import Home from "../pages/Home"
import RgbSlider from "../pages/RgbSlider"
import TextAlign from "../pages/TextAlign"
import Weather from "../pages/Weather"

export default function Routing() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/fontSizer" component={FontSizer} />
      <Route path="/textAlign" component={TextAlign} />
      <Route path="/counter" component={Counter} />
      <Route path="/clock" component={Clock} />
      <Route path="/weather" component={Weather} />
      <Route path="/colorChanger" component={ColorChanger} />
      <Route path="/rgbSlider" component={RgbSlider} />
      <Redirect exact from="/" to="/home" />
    </Switch>
  )
}

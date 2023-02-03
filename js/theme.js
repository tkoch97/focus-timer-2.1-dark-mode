import {
  controls,
  buttonsSounds,
  iconsButtonsSounds,
  buttonsTheme,
  body,
  timer,
} from "./elements.js"

export function Theme () {
  const toggleTheme = () => {
    if(body.classList.contains("bodyDark")) {
      body.classList.remove("bodyDark")
      timer.classList.remove("timerDark")
    } else {
      body.classList.add("bodyDark")
      timer.classList.add("timerDark")
    }
  }

  return{
    toggleTheme,
  }
}

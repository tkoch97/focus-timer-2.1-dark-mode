import {
  controls,
  buttonsSounds,
  iconsButtonsSounds,
  buttonsTheme,
  body,
  timer,
  iconsControls,
} from "./elements.js"

export function Theme () {
  const toggleTheme = () => {
    if(!body.classList.contains("bodyDark")) {
      body.classList.add("bodyDark");
      timer.classList.add("timerDark");
      ["play", "pause", "stop", "addMinute", "subMinute"].forEach(attribute => 
        iconsControls[attribute].setAttribute("fill", "#8F8F8F"));
      ["forest", "rain", "coffeeShop", "fireplace"].forEach(attribute => 
        buttonsSounds[attribute].classList.add("darkBackgroundSongButtons"));
    } else {
      body.classList.remove("bodyDark");
      timer.classList.remove("timerDark");
      ["play", "pause", "stop", "addMinute", "subMinute"].forEach(attribute => 
        iconsControls[attribute].setAttribute("fill", "#323238"));
      ["forest", "rain", "coffeeShop", "fireplace"].forEach(attribute =>
        buttonsSounds[attribute].classList.remove("darkBackgroundSongButtons"));
    }
  }

  return{
    toggleTheme,
  }
}

import Sounds from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import {
  minutesDisplay,
  secondsDisplay,
  controls,
  buttonsSounds,
  iconsButtonsSounds
} from "./elements.js"
import { Theme } from "./theme.js";

const timer = Timer({minutesDisplay, secondsDisplay, controls});
const sounds = Sounds ();
const theme = Theme ();

Events({controls, sounds, timer, theme});
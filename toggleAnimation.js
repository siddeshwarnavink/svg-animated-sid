const dynamicStyleEl = document.querySelector("style#dynamicCss");
const waveHandCheckboxEl = document.querySelector("input[name=waveHand]");
const blinkCheckboxEl = document.querySelector("input[name=blink]");

const WAVE_ANIMATION_CSS = `
#rightArm {
  animation: wavehand 1s infinite linear;
  transform-origin: left;
  transform-box: fill-box;
}
`;
const BLINK_ANIMATION_CSS = `
.eye-ball {
  animation: blinkEye 4s infinite linear;
}
`;

// State
let isWaveAnimationPlaying = true;
let isBlinkAnimationPlaying = true;

function updateDOMBasedOnState() {
  let dynamicCss = `${WAVE_ANIMATION_CSS}${BLINK_ANIMATION_CSS}`;

  if (isWaveAnimationPlaying && !isBlinkAnimationPlaying) {
    dynamicCss = WAVE_ANIMATION_CSS;
  } else if (!isWaveAnimationPlaying && isBlinkAnimationPlaying) {
    dynamicCss = BLINK_ANIMATION_CSS;
  } else if (!isWaveAnimationPlaying && !isBlinkAnimationPlaying) {
    dynamicCss = "";
  }

  dynamicStyleEl.innerHTML = dynamicCss;
}

// Event Listeners
waveHandCheckboxEl.addEventListener("change", () => {
  isWaveAnimationPlaying = !isWaveAnimationPlaying;
  updateDOMBasedOnState();
});
blinkCheckboxEl.addEventListener("change", () => {
  isBlinkAnimationPlaying = !isBlinkAnimationPlaying;
  updateDOMBasedOnState();
});

// Initializing
updateDOMBasedOnState();

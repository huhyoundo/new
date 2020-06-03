// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.getElementsByTagName("h2")[0];

title.innerHTML = "HI! from JS";

function mouseOutside() {
  title.innerHTML = "mouse is Outside";
  title.style.color = colors[0];
}

function mouseOver() {
  title.innerHTML = "mouse is over";
  title.style.color = colors[1];
}

function handleResize() {
  title.innerHTML = "i have been resiezed";
  title.style.color = colors[2];
}

function mouseAction() {
  title.innerHTML = "right mouse clcik";
  title.style.color = colors[3];
}

function superEventHandler() {
  title.addEventListener("mouseover", mouseOver);
  title.addEventListener("mouseout", mouseOutside);
  window.addEventListener("contextmenu", mouseAction);
  window.addEventListener("resize", handleResize);
}

superEventHandler();
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

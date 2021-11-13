import {App} from "./app.js";
import {debounce, message} from "./utils.js";


let el = document.getElementById("background");
let app = new App({el: el})

~function loop() {
  requestAnimationFrame(loop);
  app.update();
  app.draw();
}();


window.addEventListener("orientationchange", () => {
  app.fill();
});


window.addEventListener("resize", debounce(33, () => {
  app.fill();
}));

export * as CTRL from "./controller.js";

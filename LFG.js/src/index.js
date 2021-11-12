import {PerspectiveCamera} from 'three';


class App {
  constructor() {
  }

  update() {
  }

  draw() {
  }
}


let el =  document.getElementById("background");

let html = "";

for (let i=0; i < 30; i++) {
  html += THREE + "what if we edited?<br>";
}

el.innerHTML = html;



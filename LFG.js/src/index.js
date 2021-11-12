import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';

let MESSAGE = document.getElementById("message");

function message(text) {
  MESSAGE.innerText = text;
}


class App {

  constructor({el}) {
    let ctx = el.getContext("webgl", {preserveDrawingBuffer: true});

    this.renderer = new WebGLRenderer({
      canvas: el,
      antialias: true,
      preserveDrawingBuffer: true,
    });

    this.renderer.setClearColor("#00FFFF");
    this.renderer.setSize(el.clientWidth, el.clientHeight);

    this.el = el;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      el.width/el.height,
      4.0,
      3000,
    );

    this.mesh = new Mesh(
      new BoxGeometry(2, 2, 2),
      new MeshBasicMaterial({color: 0xFFFFFF}),
    );

    this.mesh.position.set(0, 0, 0);

    this.scene.add(this.mesh);
  }

  update() {
    let t = (+new Date() / 1000 * 1) % (2*Math.PI);


    this.mesh.rotation.x = 5*t;
    this.mesh.rotation.y = -3*t;
    this.mesh.rotation.z = 2*t;

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new Vector3(0, 0, 0));
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}


let el = document.getElementById("background");
let app = new App({el: el})

function loop() {
  requestAnimationFrame(loop);
  app.update();
  app.draw();
}

loop();

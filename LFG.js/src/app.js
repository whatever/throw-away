import {
  BoxGeometry,
  BufferGeometry,
  Geometry,
  Float32BufferAttribute,
  BufferAttribute,

  Object3D,

  VertexColors,
  DoubleSide,

  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

function random(low, high) {
  return low + Math.random() * (high-low);
}



function backdropMesh(depth) {
  let mat = new MeshBasicMaterial({
    vertexColors: VertexColors,
    side: DoubleSide,
  });

  let w = 2;
  let h = 1;

  let vertices = []
  let normals = [];
  let colors = [];


  let indices = new Uint16Array([
    0, 1, 2,
    1, 2, 3,
  ]);


  for (let i=0; i < 2; i++) {
    for (let j=0; j < 2; j++) {
      let x = -1 + w*i;
      let y = -1 + w*j;
      let z = depth;


      let r = random(0.5, 1);
      let g = random(0.25, 1);
      let b = random(0.75, 1);

      vertices.push(x, y, z);
      normals.push(0, 1, 1);
      colors.push(r, g, b);

    }
  }

  let geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(vertices, 3));
  geo.setAttribute("color", new Float32BufferAttribute(colors, 3));
  geo.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  geo.setIndex(new BufferAttribute(indices, 1))


  let obj = new Object3D();
  obj.add(new Mesh(geo, mat));

  return obj;
}


/**
 * Initialize, Update, Draw, Fill View
 */
export class App {

  constructor({el}) {
    let ctx = el.getContext("webgl", {preserveDrawingBuffer: true});

    this.renderer = new WebGLRenderer({
      canvas: el,
      antialias: true,
      preserveDrawingBuffer: true,
    });

    this.renderer.setClearColor(0x000000);

    this.el = el;
    this.scene = new Scene();

    this.fill();

    this.mesh = new Mesh(
      new BoxGeometry(2, 2, 2),
      new MeshBasicMaterial({color: 0xFFFFFF}),
    );
    this.mesh.position.set(0, 0, 0);
    // this.scene.add(this.mesh);

    this.bg = backdropMesh(-0);
    this.scene.add(this.bg);
  }

  fill() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    this.renderer.setSize(w, h);

    this.camera = new PerspectiveCamera(
      45,
      w/h,
      4.0,
      3000,
    );
  }

  update() {
    let t = (+new Date() / 1000 * 1) % (2*Math.PI);

    this.mesh.rotation.x = 5*t;
    this.mesh.rotation.y = -3*t;
    this.mesh.rotation.z = 2*t;

    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(new Vector3(0, 0, 0));
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}

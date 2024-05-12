const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const GRAVITY = 0.5;

const keys = {
  w: {
    code: "KeyW",
    pressed: false
  },
  a: {
    code: "KeyA",
    pressed: false
  },
  s: {
    code: "KeyS",
    pressed: false
  },
  d: {
    code: "KeyD",
    pressed: false
  },
  space: {
    code: "Space",
    pressed: false
  },
  shift: {
    code: "ShiftLeft",
    pressed: true
  }
};

const player = new Player();

function clearCanvas() {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  window.requestAnimationFrame(animate);

  clearCanvas();
  player.update();

  if (keys.shift.pressed && keys.a.pressed) {
    player.runLeft();
  } else if (keys.shift.pressed && keys.d.pressed) {
    player.runRight();
  } else if (keys.a.pressed) {
    player.walkLeft();
  } else if (keys.d.pressed) {
    player.walkRight();
  } else {
    player.stopMoving();
  }

  if (keys.space.pressed && player.position.y + player.height === canvas.height) {
    player.jump();
  }
}

animate();

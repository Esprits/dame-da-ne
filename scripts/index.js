const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const GRAVITY = 0.5;

class Player {
  constructor(position = { x: 100, y: 0 }, width = 100, height = 100, colour = "red") {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1
    };

    this.width = width;
    this.height = height;
    this.colour = colour;
  }

  draw() {
    c.fillStyle = this.colour;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.velocity.y += GRAVITY;
    } else {
      this.velocity.y = 0;
    }
  }

  moveLeft() {
    this.velocity.x = -5;
  }

  moveRight() {
    this.velocity.x = 5;
  }

  stopMoving() {
    this.velocity.x = 0;
  }

  jump() {
    this.velocity.y = -15;
  }
}

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
  }
};

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);

  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed) {
    player.moveLeft();
  } else if (keys.d.pressed) {
    player.moveRight();
  } else {
    player.stopMoving();
  }

  if (keys.space.pressed && player.position.y + player.height === canvas.height) {
    player.jump();
  }
}

animate();

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case keys.w.code:
      keys.w.pressed = true;
      break;

    case keys.a.code:
      keys.a.pressed = true;
      break;

    case keys.s.code:
      keys.s.pressed = true;
      break;

    case keys.d.code:
      keys.d.pressed = true;
      break;

    case keys.space.code:
      keys.space.pressed = true;
      break;

    default:
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case keys.w.code:
      keys.w.pressed = false;
      break;

    case keys.a.code:
      keys.a.pressed = false;
      break;

    case keys.s.code:
      keys.s.pressed = false;
      break;

    case keys.d.code:
      keys.d.pressed = false;
      break;

    case keys.space.code:
      keys.space.pressed = false;
      break;

    default:
      break;
  }
});

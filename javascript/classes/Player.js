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

  walkLeft() {
    this.velocity.x = -2;
  }

  walkRight() {
    this.velocity.x = 2;
  }

  runLeft() {
    this.velocity.x = -5;
  }

  runRight() {
    this.velocity.x = 5;
  }

  stopMoving() {
    this.velocity.x = 0;
  }

  jump() {
    this.velocity.y = -15;
  }
}

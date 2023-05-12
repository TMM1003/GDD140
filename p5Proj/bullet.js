class Bullet {
  constructor(x, y, size, targetPosition, speed) {
    this.sprite = new Sprite(x, y, size, size, 'kinematic');
    this.sprite.rotationLock = true;
    this.sprite.color = 'yellow';
    this.sprite.stroke = 'red';
    this.speed = speed;
    this.targetPosition = targetPosition.copy();
  }

  update() {
    const direction = p5.Vector.sub(this.targetPosition, this.sprite.position).normalize();
    const velocity = direction.mult(this.speed);
    this.sprite.velocity = velocity;
    this.sprite.move();
  }

  remove() {
    this.sprite.remove();
  }
}

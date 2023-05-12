class Player {
  constructor() 
  {
    this.sprite = new Sprite(50, 20, 20, 20);
    this.sprite.color = 'salmon';
    this.sprite.stroke = 'salmon';
    this.sprite.collider = 'dynamic';
    this.sprite.drag = 20;
    this.sprite.rotationLock = true;
  }
  update() {
    if (kb.pressing("W") || kb.pressing('up')) {
      this.sprite.vel.y -= 0.75;
    }
    if (kb.pressing("S") || kb.pressing('down')) {
      this.sprite.vel.y += 0.75;
    }
    if (kb.pressing("A") || kb.pressing('left')) {
      this.sprite.vel.x -= 0.75;
    }
    if (kb.pressing("D") || kb.pressing('right')) {
      this.sprite.vel.x += 0.75;
    }
  }
  
  remove() 
  {
    this.sprite.remove();
  }
}

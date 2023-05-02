/*
class Enemy {
  //Constructor
  constructor(enemyX,enemyY)
  enemy = new Enemy(50,200,20,20);
  enemy.color = '#3E424B';
  enemy.stroke = '#3E424B';
  enemy.collider = 'dynamic';
  enemy.drag = 20;
  enemy.rotationLock = true;
}
*/
class enemy {
	constructor(x, y, w, h, trigx, trigy, trigs) {
		this.sprite = new Sprite(x, y, w, h);
		this.trigger = new Sprite(trigx, trigy, trigs);
		this.trigger.collider = "none";
		this.active = false;
	}

	update() {
		if (this.active == false) {
			if (dist(p.x, p.y, this.trigger.x, this.trigger.y) < this.trigger.d * 2) {
				this.active = true;
				this.trigger.remove();
				this.trigger = null;
				print("Hit trigger, activating enemy.");
			}
		}
	}
}

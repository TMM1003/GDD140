class enemy {
	constructor(enemyX, enemyY, w, h, trigx, trigy, trigw, trigh) {
		this.sprite = new Sprite(enemyX, enemyY, w, h);
		this.trigger = new Sprite(trigx, trigy, trigw, trigh);
		this.bullet = new Sprite(enemyX,enemyY - 10,5,5);
		this.trigger.color = 220;
		this.trigger.collider = "none";
		this.active = false;
	}

	update() {
		if (this.active == false) {
			if (this.trigger.overlaps(player)) {
				this.active = true;
				this.trigger.remove();
				this.trigger = null;
				print("Hit trigger, activating ");
				this.bullet.moveTo(player);

			}
		}
		if (this.bullet.y >= this.trigy)
		{
			print('hit the trig line');
			this.bullet.remove();
		}
	}
}


/*
bullets = new Sprite(enemy.x,enemy.y)
    bullets.diameter = 5;
    bullets.color = 'yellow';
    bullets.length = 3;
    //let shot = new bullets.Sprite(enemy.x,enemy.y);
    bullet.moveTowards(player);
	test if github updated the right stuff pt 2
*/
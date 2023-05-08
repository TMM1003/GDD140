let hitCheck = 0;
let reload = 0;
class enemy {
	constructor(enemyX, enemyY, w, h, trigx, trigy, trigw, trigh) {
		this.sprite = new Sprite(enemyX, enemyY, w, h);
		this.trigger = new Sprite(trigx, trigy, trigw, trigh);
		this.bullet = new Sprite(enemyX,enemyY - 10,5,5);
		this.trigger.color = 220;
		this.trigger.collider = "none";
		this.active = false;
		this.trigy = trigy;
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
		if (player.collides(this.bullet)) 
		{
			console.log("Hit");
			hitCheck = 1;
		}
		if (this.bullet.y <= this.trigy && hitCheck == 0)
		{
			print('hit the trig line');
			this.bullet.remove();
		}
		else if (hitCheck != 0)
		{
			text("YOU DIED", player.x,player.y, player.x, player.y)
			this.player.remove()
			this.bullet.remove();
		}
	}
}
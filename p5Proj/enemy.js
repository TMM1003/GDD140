let hitCheck = 0;
let reload = 0;
var bullet;


class enemy {
	constructor(enemyX, enemyY, w, h, trigx, trigy, trigw, trigh) {
		this.sprite = new Sprite(enemyX, enemyY, w, h);
		this.sprite.color = 'slategrey';
		this.sprite.stroke = 'grey'
		this.trigger = new Sprite(trigx, trigy, trigw, trigh);
		this.trigger.color = (220);
		//this.trigger.stroke = (220);
		this.trigger.stroke = 'darkgrey';
		this.bullet = new Sprite(enemyX,enemyY - 10,5,5);
		this.bullet.color = (220);
		this.bullet.stroke = 'red';
		this.trigger.color = 220;
		this.trigger.collider = "none";
		this.active = false;
		this.trigy = trigy;
		//Temp Cam
		camera.x = player.x;
		camera.y = player.y;
		camera.zoom = 1;
		
		/*
		camera.x = player.x;
		camera.y = player.y;
		camera.zoom = 3;
		*/
	}
	update() {
		if (this.active == false) 
		{
			if (this.trigger.overlaps(player)) 
			{
				this.active = true;
				this.trigger.remove();
				this.trigger = null;
				print("Hit trigger, activating ");
				this.bullet.color = "yellow";
				this.bullet.moveTo(player);
				print("player pos is: " + player.x)
				
				/*
				camera.x = player.x;
				camera.y = player.pos;
				camera.zoom = 1.5;
				*/
			}
		
			//time mechanic?
			if (kb.pressing("S") || kb.pressing('down')) 
			{
				//this.bullet.vel = this.bullet.vel;
				this.bullet.vel = player.vel.mag();
			}
			else
			{
				this.bullet.vel = this.bullet.vel;
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
		else if (hitCheck == 1)
		{
			text("YOU\nDIED", player.x,player.y, player.x, player.y)
			player.remove();
			this.bullet.remove();
		}
	}
}

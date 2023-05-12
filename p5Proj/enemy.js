class Enemy {
	constructor(x, y, w, h, spawnSide) {
	  this.sprite = new Sprite(x, y, w, h);
	  this.sprite.rotationLock = true;
	  this.sprite.color = 'slategrey';
	  this.sprite.stroke = 'grey';
	  this.bullet = null;
	  this.active = false;
	  this.spawnSide = spawnSide; // Store the spawn side (North, South, East, West)
	  this.initialPlayerPosition = null;
	  this.shootingRange = 100; // Adjust this value to change the shooting range of the enemies
	}
  
	update(playerSprite) {
	  const playerPosition = createVector(playerSprite.x, playerSprite.y);
	  const distance = p5.Vector.dist(playerPosition, this.sprite.position);
  
	  if (!this.active && distance < this.shootingRange) {
		this.active = true;
		console.log("Player too close, activating enemy");
	  }
  
	  if (this.active) {
		this.initialPlayerPosition = createVector(playerSprite.x, playerSprite.y); // Update the initial player position
  
		if (!this.bullet) {
		  const bulletSize = 5; // Adjust bullet size as needed
		  const bulletSpeed = 15;
		  const bulletSpawnPosition = this.getBulletSpawnPosition(); // Use the spawn side to determine the bullet spawn position
		  this.bullet = new Bullet(bulletSpawnPosition.x, bulletSpawnPosition.y, bulletSize, this.initialPlayerPosition, bulletSpeed);
		  this.bullet.sprite.color = 'yellow';
		} else {
		  this.bullet.initialPlayerPosition = createVector(playerSprite.x, playerSprite.y); // Update the bullet's target position
		}
	  }
  
	  if (this.bullet) {
		this.bullet.update();
		text("Bullet Speed: " + this.bullet.speed, 25, 200);
	  } else {
		text("Bullet Speed: 0", 25, 200);
	  }
	}
  
	getBulletSpawnPosition() {
	  const spawnDistance = 10; // Adjust this value to control the distance of the bullet spawn from the enemy
  
	  let spawnPosition = createVector(this.sprite.x, this.sprite.y);

	  switch (this.spawnSide) {
		case "North":
		  spawnPosition.y -= spawnDistance;
		  break;
		case "South":
		  spawnPosition.y += spawnDistance;
		  break;
		case "East":
		  spawnPosition.x += spawnDistance;
		  break;
		case "West":
		  spawnPosition.x -= spawnDistance;
		  break;
	  }
  
	  return spawnPosition;
	}
}
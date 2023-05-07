worldTime = 1;
let enemies = [];

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	//constructor         (x,   y,  w,   h, trigx, trigy, trigw, trigh)
	enemies.push(new enemy(50, 180, 20, 20, 50   , 50,     70,    10));
}

function draw() {
	background(220);
	//Player Movement
	if (kb.pressing("W")) {
		player.vel.y -= 1;
	}
	if (kb.pressing("S")) {
		player.vel.y += 1;
	}
	if (kb.pressing("A")) {
		player.vel.x -= 1;
	}
	if (kb.pressing("D")) {
		player.vel.x += 1;
	}
	worldTime = player.vel.mag();
	text(worldTime, 25, 25);

	for (let i = 0; i < enemies.length; i++) {
		enemies[i].update();
	}
	/*
	if (player.collides(bullets.Group)) {
		console.log("Hit");
	}
	*/
}

function mouseClicked() {
	console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}

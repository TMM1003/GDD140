worldTime = 1;
let enemies = [];

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	enemies.push(new enemy(55, 180, 10, 10, 50, 80, 50, 20));
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
}

function mouseClicked() {
	console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}

worldTime = 1;
let enemies = [];

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	enemies.push(new enemy(55,50,80,10,50,150,50))
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

	
}

function mouseClicked() {
	console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}

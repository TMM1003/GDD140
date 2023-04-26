time = 1;

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	Enemy();
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
	time = player.vel.mag();
	text(time, 25, 25);
}

function mouseClicked() {
	console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}

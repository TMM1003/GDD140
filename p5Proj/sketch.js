worldTime = 1;
let enemies = [];

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	//constructor          (x,   y,   w,   h, trigx, trigy,  trigw, trigh)
	enemies.push(new enemy(50, 180, 20,  20, 50   , 50,     70,    10));
	//move to later- x: 230, y:140
	enemies.push(new enemy(230, 100, 20,  20, 130   , 150,  10,    100));
}

function draw() {
	background(220);
	//Player Movement
	if (kb.pressing("W") || kb.pressing('up')) {
		player.vel.y -= 1;
	}
	if (kb.pressing("S") || kb.pressing('down')) {
		player.vel.y += 1;
	}
	if (kb.pressing("A") || kb.pressing('left')) {
		player.vel.x -= 1;
	}
	if (kb.pressing("D") || kb.pressing('right')) {
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

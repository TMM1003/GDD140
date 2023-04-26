let scanLine1;
let gameTime = 1;

function setup() {
	createCanvas(600, 400);
	drawMap();
	Player();
	Enemy();
	Bullet();
	scanLine1 = new Sprite(50,40, 50, 2);
	scanLine1.collider = 'none'
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
	gameTime = player.vel.mag();
	text(gameTime, 25, 25);

	if(player.y == scanLine1.y)
	{
		bulletFire();
		console.log('passed scanline1');s
	}

	if(bullet.pos == scanLine1.pos)
	{
		bullet.remove();
	}

}

function mouseClicked() {
	console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}

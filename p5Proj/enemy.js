class enemy {
	constructor(x, y, w, h, trigx, trigy, trigw, trigh) {
		this.sprite = new Sprite(x, y, w, h);
		this.trigger = new Sprite(trigx, trigy, trigw, trigh);
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
			}
		}
	}
}

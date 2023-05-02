class enemy{
  constructor(x, y,w,h, trigx, trigy, trigs){
    this.sprite = new Sprite(x, y,w,h)
    this.trigger = new Sprite(trigx, trigy, trigs)
    this.trigger.collider = 'none'
    this.active = false
  }
  
  update(){
    if(this.active == false){
      if(dist(player.x, player.y, this.trigger.x, this.trigger.y) < this.trigger.d*2){
        this.active = true;
        this.trigger.remove();
        this.trigger = null;
        print("Hit trigger, activating enemy.");
      }
    }
  }
}
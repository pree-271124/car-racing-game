class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('restart');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    background( formBackGround)
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 + 50, 100);
    this.reset.position(displayWidth-100, 100);
    title.style('color','red')

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.style('color','red')
    this.input.style('width','500px')
    this.input.style('height','50px')
    this.input.style('border','100px')
    this.input.style('background','skyblue')
    this.button.position(displayWidth/2 + 150, displayHeight/2);
    this.button.style('color','red')
    this.button.style('width','50px')

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
  }
}
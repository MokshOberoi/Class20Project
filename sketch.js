var backgroundImage ;
var cat , catGoing , catImage , mouse1 , mouseGift , mouseImage ;

function preload() {
    //load the images here
    backgroundImage = loadImage("./images/garden.png");

    catGoing = loadAnimation("./images/tomTwo.png","./images/tomThree.png")
    catImage = loadImage("./images/tomOne.png");
    catSitting = loadImage("./images/tomFour.png");

    mouseImage = loadImage("./images/jerryOne.png")
    mouseBetween = loadImage("./images/jerryThree.png");
    mouseLast = loadImage("./images/jerryFour.png");

}

function setup(){
    createCanvas(600,600);

    //create tom and jerry sprites here
    mouse1 = createSprite(120,500,20,20);
    mouse1.addImage(mouseImage);
    //mouse.addImage(mouseImage);
    mouse1.scale = 0.1;

    cat = createSprite(500,500,20,20);
    cat.addImage(catImage);
    cat.scale = 0.1;


}

function draw() {

    background(backgroundImage);


    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse1.x < (cat.width - mouse1.width/2)){
        cat.addImage(catSitting);
        cat.velocityX = 0 ;

    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catGoing);
      cat.changeAnimation("catRunning");
  }

}

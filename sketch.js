var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor = "blue"
}

function draw() 
{
  background("blue");
  if(keyDown("right")){
  background(red);
  }
  if(keyDown("left")){
    background(green);
    }
    if(keyDown("up")){
      background(purple);
      }
      if(keyDown("down")){
        background(blue);
        }
 drawSprites();
}





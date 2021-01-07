var ground, ground_running, edges;
var redballoon, redballoon_running, redballoonGroup;
var greenballoon, greenballoon_running, greenballoonGroup;
var blueballoon, blueballoon_running, blueballoonGroup;
var pinkballoon, pinkballoon_running, pinkballoonGroup;
var bow, bow_running;
var arrow, arrowImage, arrowGroup;
var score=0;

  function preload()
{
       //load your images here 
       ground_running = loadImage("background0.png", "background20.png");

       redballoon_running = loadImage("red_balloon0.png");

       greenballoon_running = loadImage("green_balloon0.png");

       blueballoon_running = loadImage("blue_balloon0.png");

       pinkballoon_running = loadImage("pink_balloon0.png");

       bow_running = loadAnimation("bow0.png");

       arrowImage=               loadImage("arrow0.png");

   }

function setup() 
{
        createCanvas(600, 600);

        //add code here
        ground = createSprite(250, 50, 10, 10);
        ground.addAnimation("running", ground_running);
        ground.scale=3; 
        ground.x = ground.width/2;
        ground.velocityX=-5;

        edges = createEdgeSprites();  

        bow=createSprite(550, 250, 50, 50);
        bow.addAnimation("running", bow_running);
        bow.scale=1;  

        redballoonGroup=new Group(); 
  
        greenballoonGroup=new Group(); 

        blueballoonGroup=new Group(); 

        pinkballoonGroup=new Group(); 

        arrowGroup=new Group(); 
  
  
}

function draw()
{
        bow. y = mouseY;

          //add code here
        bow.bounceOff(edges);

           if (ground.x<0) 
          { 
            ground.x = ground.width/2;  
          }

      //release arrow when space key is pressed
      if (keyWentDown("space"))
        {
            var temp_arrow = createArrow();
            temp_arrow.addImage(arrowImage);      
            temp_arrow.y = bow.y;
            temp_arrow.velocityX =-15;
          temp_arrow.lifetime=40;
        }

       var select_balloon=Math.round(random(1,4));
    console.log(select_balloon)

    if(World.frameCount % 100 == 0)
    {
        if(select_balloon == 1)
        {
            redBalloon();
        } else if(select_balloon == 2)
        {
          greenBalloon();
        } else if(select_balloon == 3)
        {
          blueBalloon();
        } else
        {
          pinkBalloon();
        }
}
        
  
     if(arrowGroup.isTouching(redballoonGroup)){
          redballoonGroup.destroyEach();
          arrowGroup.destroyEach();
       score=score+1;
        }
        
   if(arrowGroup.isTouching(pinkballoonGroup)){
          pinkballoonGroup.destroyEach();
          arrowGroup.destroyEach();
          score=score+1;
        }
  
       if(arrowGroup.isTouching(blueballoonGroup)){
          blueballoonGroup.destroyEach();
          arrowGroup.destroyEach();
       score=score+1;
        }
  
  if(arrowGroup.isTouching(greenballoonGroup)){
          greenballoonGroup.destroyEach();
          arrowGroup.destroyEach();
       score=score+1;
        }
  
        drawSprites(); 
  
        textSize(20);
        text("Score : " + score, 500, 50);   
  
   
}

function createArrow()
{        
       arrow=createSprite(530, 250, 1, 1);
       arrow.scale=0.3;
       arrowGroup.add(arrow);
       return arrow;
}

function redBalloon()
{
  
      var red=createSprite(0, Math.round(random(50, 370)), 10, 10);
      red.addImage(redballoon_running);
      red.lifetime=200; 
      red.velocityX=3;
      red.scale=0.1;
      redballoonGroup.add(red);
      return red;
}

function greenBalloon() 
{
      var green=createSprite(0, Math.round(random(50, 370)), 10, 10);
      green.addImage(greenballoon_running);
      green.scale=0.1;
      green.velocityX=3;
      green.lifetime=200;
      greenballoonGroup.add(green);
      return green;
}

function blueBalloon()
{
      var blue=createSprite(0, Math.round(random(50, 370)), 10, 10);
      blue.addImage(blueballoon_running);
      blue.scale=0.1;
      blue.velocityX=3;
      blue.lifetime=200;
      blueballoonGroup.add(blue);
      return blue;
}

function pinkBalloon()
{
      var pink=createSprite(0, Math.round(random(50, 370)), 10, 10);
      pink.addImage(pinkballoon_running);
      pink.scale=1.5;
      pink.velocityX=3;
      pink.lifetime=200; 
      pinkballoonGroup.add(pink);
      return pink;

}
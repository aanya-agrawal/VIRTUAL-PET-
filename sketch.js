var dog , foodStock ,foodS , dogimg , database;

function preload()
{
	dogimg=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);

  dog = createSprite(400,300,10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;

  database= firebase.database(); 

  foodStock =database.ref("FOOD");
  foodStock.on("value",function (abc){
  foodS=abc.val();
  })

}


function draw() {  

  background("white");

  if(keyDown(UP_ARROW)){
    food(foodS);
  }
  drawSprites();
  //add styles here

}


function food(a){
  if(a<=0){
    a=0
  }

  else{
    a=a-1;
  }
  database.ref("FOOD").update({
    FOOD:a
  })
}



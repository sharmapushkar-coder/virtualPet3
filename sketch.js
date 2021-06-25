var dog1,dog2,dog;
var database;
var foodleft;
var last;
var time,h,m,s,tame;
var total=50;
var game="hungry"
var injection,food1
var c=2;
function preload(){
dog1=loadImage("img1.png");
dog2=loadImage("img2.png");
injection=loadImage("injection.png")
food1=loadImage("food.png")

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  var foodleft=database.ref("VirtualPet/food")
  foodleft.on("value",readop,showerror)
  dog=createSprite(width/2,250,20,20);
  dog.addImage(dog1);
  dog.scale=0.3
  var last=database.ref("VirtualPet/last")
  last.on("value",readit,problem)
  
}


function draw() {  
  background("black");
  var connection=window.navigator.onLine;
  time=new Date();
  h=time.getHours();
  m=time.getMinutes();
  s=time.getSeconds();
  tame=h+":"+m+":"+s;
  fill("white");
  textSize(15);
  text("FOOD LEFT :: "+total,50,50);
  text("TIME::"+h+":"+m+":"+s,280,50)
  if(keyDown(UP_ARROW)){
    dog.addImage(dog2);
    writeP(1);
}
if(connection){

}
else{
  alert("NETWORK CONNECTION ERROR CLICK OK TO RETRY.")
  
}

if(game==="hungry"){
  
}
else{
  document.getElementById("btn").innerHTML="<button type='button'onclick=''>Waiting for dog..</Button>"
}
  
  drawSprites();
  

}
function writeP(m){
  database.ref("VirtualPet").set({
    'food':total-m,
  });
}

function write(t){
database.ref("VirtualPet").set({
  'last':tame,
})
}
function readit(data){
tame=data.val();
}
function problem(){
  alert("Uploading feedtime failed!");
}

function reset(){
  if(total===0||total<0){
  writeP(-50);
  dog.addImage(dog1)
  }
  else{
   alert(total+" food still left")
  }
}
function readop(data){
total=data.val();
}


function showerror(){
  alert("SOMETHING WENT WRONG!!");
  }
  



  function feed(){
    var lastfeed=tame;
    dog.addImage(dog2);
    writeP(1)
    var x=random(0,800)
    var food=createSprite(x,0,20,20);
    food.addImage(food1)
    food.scale=0.1;
    food.velocityY=5;
    food.lifetime=80;
  //  c=c-1
  //  if(c===0){
 //   game="not"
 //   }
  //  setTimeout(reset(),2000)
  }
  function vacc(){
    var x=random(0,800)
    var pin=createSprite(x,0,20,20);
    pin.addImage(injection);
    pin.scale=0.2;
    pin.lifetime=80;
    pin.velocityY=5;
  }
  //function reset(){
  //  game="hungry"
   // document.getElementById("btn").innerHTML="<button type='button'onclick='feed()'>Feed</Button>"
 // }
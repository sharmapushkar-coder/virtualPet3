var dog1,dog2,dog;
var database;
var foodleft;
var last;
var time,h,m,s,tame;
var total=50;
var game="hungry"
var injection,food1
var c=10;
timer=5;
function preload(){
dog1=loadImage("img1.png");
dog2=loadImage("img2.png");
injection=loadImage("Injection.png")
food1=loadImage("food.png")

}

function setup() {
	alert("A newer version is available!!");
	location.href="";
	createCanvas(800, 700);
  database=firebase.database();
  var foodleft=database.ref("VirtualPet/food")
  foodleft.on("value",readop,showerror)
  dog=createSprite(width/2,250,20,20);
  dog.addImage(dog1);
  dog.scale=0.3
  
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
if(connection){

}
else{
  alert("NETWORK CONNECTION ERROR CLICK OK TO RETRY.")
  
}

  
if(game==="hungry"){
  document.getElementById("btn1").innerHTML="<button type='button'onclick='feed()'size='20'>Feed</button>";
  document.getElementById("btn").innerHTML="";
 //c=10
}
else{
  document.getElementById("btn1").innerHTML=""
  document.getElementById("btn").innerHTML="DOG IS NOT HUNGRY PLEASE WAIT!!!"
  setTimeout(function(){ game="hungry";c=12;}, 10000);
}

  drawSprites();
  

}
function writeP(m){
  database.ref("VirtualPet").set({
    'food':total-m,
  });
}



function problem(){
  alert("Uploading feedtime failed!");
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
    c=c-1
    if(c===0){
    game="not"
    }
  }
  function vacc(){
    var x=random(0,800)
    var pin=createSprite(x,0,20,20);
    pin.addImage(injection);
    pin.scale=0.2;
    pin.lifetime=80;
    pin.velocityY=5;
  }
  function reset(){
    
  
 
  }

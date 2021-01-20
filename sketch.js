var canvas,playercount;
var gamestate=0;
var database,form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
game=new Game();
game.getstate();
game.start();
  
}

function draw(){
  background("white");
  
   
  
}





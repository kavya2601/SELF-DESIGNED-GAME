const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var body , world , engine;

var database , canvas;

// to store class bg
var cover;

//playing characters of the game
var TOM , JERRY;

//non-playing characters(i.e. obstacles as well as point taking mem)in the game
var cheese , mop;

// state of the game
gameState = 'NOT READY MAN...';

function preload() {
cover = loadImage("TomandJerryTitle.jpg");
}
function setup() {
 canvas = createCanvas(displayWidth-20,displayHeight-30);
 database = firebase.database();
 cover = new bg();

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  
  background(cover); 
  drawSprites();
}

var database;
var gamestate=0,playercount=0;
var form,game,player;

function setup() {

    database = firebase.database()
    createCanvas(500, 500);
    game=new Game()
    game.getstate()
    game.start()
    
}

function draw() {

}

//
//
//
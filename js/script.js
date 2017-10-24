/*var player_one={
    locationX:0,
    locationY:0,
    height:50,
    width:50,
    bgColor:"red",
    gameChipX:[],
    gameChipY:[]
}

var player_two={
    locationX:0,
    locationY:0,
    height:50,
    width:50,
    bgColor:"yellow",
    gameChipX:[],
    gameChipY:[]
}

var playerA=new Object(player_one);
var playerB=new Object(player_two);

document.addEventListener();

document.getElementById('kreis').id = 'kreisrot'; */

//var element = document.getElementById("kreis");
//element.setAttribute("kreis", "kreisrot");

var round = 0;
var users = [];
var currentPlayer = "";
var currentUser = 0;  //damit man das array "users[]" auf 0 oder 1 setzen kann, um Spieler festzusetzen
var player_one = users[0];
var player_two = users[1];
//var feld = []

// Namen setzen von Spieler "Rot" & "Gelb" - muss mit Login verknüpft werden(?)
document.getElementById("spieler1").innerHTML = player_one;
document.getElementById("spieler2").innerHTML = player_two;

//Namen setzen unten bei "Am Zug" - muss ebenfalls mit Login verknüpft werden
currentPlayer = player_one;
document.getElementById("weristdran").innerHTML = currentPlayer;

//Chip setzen für bestimmte Runde - entweder spieler 1 oder spieler 2
function currentRound(){
  if (round % 2 === 0) {

    $(function() {
        $('#kreis56').click(function() {
            $(this).attr('id', 'kreisrot'); //Spieler 1 setzt
        });
    });
  }else{

    $(function() {
        $('#kreis55').click(function() {
            $(this).attr('id', 'kreisgelb'); // Spieler 2 setzt
        });
    });
  }
}

currentRound();
  nextRound();

//nächste Runde setzen
function nextRound(){
  round++;
  if(currentUser === 0){ //Wer ist der jetzige nutzer (Ist nur der zähler) - Wenn zb users[0] ist, wird dieser dann durch users[currentUser] auf users[1] gesetzt
    currentUser ++;
    currentRound();
  }else{
    currentUser --;
    currentRound(); // Hier genau andersrum, users[1] wird zu users[0]
  }

  currentPlayer = users[currentUser]; // hier wird festgelegt welcher Spieler dran ist

}




///// Dies ist nur ein Test/////
//function playerDefine(){

//  alert("hallo test");

//}

//playerDefine();

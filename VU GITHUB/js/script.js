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

$(function() {
    $('#kreis56').click(function() {
        $(this).attr('id', 'kreisrot');
    });
});

$(function() {
    $('#kreis55').click(function() {
        $(this).attr('id', 'kreisgelb');
    });
});

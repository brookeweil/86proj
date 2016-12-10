var ctx;

window.onload = function(){ 

    // Initialize buttons and canvas
    initButtons();

    var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.moveTo(0,0);

    var color;

    var xprediction;
    var yprediction;

    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
                return;
        }
        getCurrentColor();
        var xprediction = data.x; //these x coordinates are relative to the viewport 
        var yprediction = data.y; //these y coordinates are relative to the viewport
        ctx.lineTo(xprediction,yprediction);
        ctx.stroke();
        console.log(elapsedTime); //elapsed time is based on time since begin was called
            }).begin();
};

function initButtons () {
    document.getElementById("buttonRed").onclick = function(){
            document.getElementById("currcolor").style = "background-color: red";
    };
    document.getElementById("buttonOrange").onclick = function(){
            document.getElementById("currcolor").style = "background-color: orange";
    };
    document.getElementById("buttonYellow").onclick = function(){
            document.getElementById("currcolor").style = "background-color: yellow";
    };
    document.getElementById("buttonGreen").onclick = function(){
            document.getElementById("currcolor").style = "background-color: green";
    };
    document.getElementById("buttonBlue").onclick = function(){
            document.getElementById("currcolor").style = "background-color: blue";
    };
}

function getCurrentColor() {
    console.log ("Color is: ")
    console.log (jQuery('#currcolor').css("background-color"));
    ctx.strokeStyle=(jQuery('#currcolor').css("background-color"));
    // console.log (currcolor.style.backgroundColor)
}


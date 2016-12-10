document.getElementById("button1").onclick = function(){
        document.getElementById("currcolor") = "red";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img,10,10);
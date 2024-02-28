var canvas= document.getElementById("c1")
var ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY=canvas.offsetTop;
    circle(mouseX, mouseY)
}
function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=5;
    ctx.arc(mouseX, mouseY, 60, 1, 2*Math.PI);
    ctx.stroke() 
}
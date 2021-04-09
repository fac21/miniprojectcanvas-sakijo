// Drawing Functionality 
let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = (window.innerWidth * 0.8);
let ctx = canvas.getContext('2d');
ctx.strokeStyle = "black";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 25;
let lastX = 0;
let lastY = 0;

let isDrawing = false;

function draw(e) {
    if (!isDrawing) {
        return;
    }
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];  
}

canvas.addEventListener("mousedown",  (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});


// Add Characters
let buttons = document.querySelectorAll('button');
let isImage = false;
buttons.forEach((btn) => btn.addEventListener("click", addImage))

function addImage(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height) //clears canvas
  let img = e.target;
  ctx.drawImage(img, 10, 10)
}

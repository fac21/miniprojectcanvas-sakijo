// Drawing Functionality 
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let penColor = "black";
ctx.strokeStyle = penColor;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 2;
let lastX = 0;
let lastY = 0;

let isDrawing = false;

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
        canvas.width = window.innerWidth *0.8;
        canvas.height = window.innerHeight;
}
resizeCanvas();

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


// Add images
let imgButtons = document.querySelectorAll('.imgAdd');
let isImage = false;
imgButtons.forEach((btn) => btn.addEventListener("click", addImage))

function addImage(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height) //clears canvas
  let img = e.target;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

// Change colour

let colourBtns = document.querySelectorAll('.colorBtn');

function changeColor(e) {
    penColor = e.target.id;
    ctx.strokeStyle = penColor;
}

colourBtns.forEach((btn) => {
    btn.style.backgroundColor = btn.id;
    // btn.style.borderColor = btn.id;
    btn.addEventListener("click", changeColor)
})

// change Stroke


let strokeBtns = document.querySelectorAll('.penStroke');

function changeStroke(e) {
    let stroke = e.target.getAttribute("data-stroke");
    console.log(stroke);
    ctx.lineWidth = stroke;
}

strokeBtns.forEach((btn) => {
    btn.addEventListener("click", changeStroke)
})


// (function() {
//     var canvas = document.getElementById('canvas'),
//             context = canvas.getContext('2d');

//     // resize the canvas to fill browser window dynamically
//     window.addEventListener('resize', resizeCanvas, false);

//     function resizeCanvas() {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;

//             /**
//              * Your drawings need to be inside this function otherwise they will be reset when 
//              * you resize the browser window and the canvas goes will be cleared.
//              */
//             drawStuff(); 
//     }
//     resizeCanvas();

//     function drawStuff() {
//             // do your drawing stuff here
//     }
// })();
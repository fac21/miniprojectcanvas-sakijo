// Drawing Functionality 
let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = (window.innerWidth * 0.8);
let ctx = canvas.getContext('2d');
let penColor = "black";
ctx.strokeStyle = penColor;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 2;
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


// Add images
let imgButtons = document.querySelectorAll('.imgAdd');
let isImage = false;
let lastImage
imgButtons.forEach((btn) => btn.addEventListener("click", addImage))

function addImage(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (e.target !== lastImage){
    let img = e.target;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }

  lastImage = e.target
  isImage = !isImage;
  
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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined;
    y = undefined;

    console.log(isPressed, x, y)
})

function drawCircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}
drawCircle(100, 200)
drawLine(300, 300, 300, 500)
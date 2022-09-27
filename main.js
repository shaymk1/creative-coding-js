let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "blue";
context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 300, 300);
context.stroke();

for (let i = 0; i < 5; i++) {
	context.beginPath();
	context.fillStyle = "red";
	context.fillRect(100 + 80 * i, 100, 60, 60);
}

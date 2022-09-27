const canvasSketch = require("canvas-sketch");

const settings = {
	dimensions: [2048, 2048],
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "black";
		context.fillRect(0, 0, width, height);

		for (let i = 0; i < 5; i++) {
			context.beginPath();
			context.fillStyle = "red";
			context.fillRect(100 + 80 * i, 100, 60, 60);
		}
	};
};

canvasSketch(sketch, settings);

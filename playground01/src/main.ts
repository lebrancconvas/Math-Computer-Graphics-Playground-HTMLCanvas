import { canvas, ctx, config } from './canvas';
import { Shape } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Init.
let timeStamp = 0;
let lastTime = 0;

const circle = new Shape(canvas.width / 2, 30, 30, 'Green');

// Game Loop.
function animate(timeStamp: number) {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Timer.
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  console.log(`Delta Time: ${deltaTime} milliseconds`);
  console.log(`FPS: ${1000 / deltaTime}`);

  // Animation Logic.
  circle.update();
  circle.draw(ctx);

};

animate(timeStamp);

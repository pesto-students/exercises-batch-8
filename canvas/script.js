/* eslint-disable no-undef */

const drawFront = () => {
  const c = document.getElementById('my-canvas');
  const ctx = c.getContext('2d');
  ctx.moveTo(100, 150);
  ctx.lineTo(170, 100);
  ctx.lineTo(240, 150);
  ctx.lineTo(240, 350);
  ctx.lineTo(100, 350);
  ctx.lineTo(100, 150);
  ctx.stroke();
};

const drawBody = () => {
  const c = document.getElementById('my-canvas');
  const ctx = c.getContext('2d');
  ctx.moveTo(240, 350);
  ctx.lineTo(450, 300);
  ctx.lineTo(450, 100);
  ctx.lineTo(240, 150);
  ctx.stroke();
};


const drawRoof = () => {
  const c = document.getElementById('my-canvas');
  const ctx = c.getContext('2d');
  ctx.moveTo(170, 100);
  ctx.lineTo(400, 50);
  ctx.stroke();
};

// const drawCircle = () => {
//     const c = document.getElementById('my-canvas');
//     const ctx = c.getContext('2d');
//     ctx.moveTo(0, 0);
//     ctx.lineTo(200, 100);
//     ctx.stroke();
//   };


const drawHut = () => {
  drawFront();
  drawBody();
  drawRoof();
};

drawHut();

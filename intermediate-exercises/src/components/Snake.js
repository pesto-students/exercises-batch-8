import directions from './utils/directions';

class SnakeState {
  constructor() {
    this.top = { x: 8, y: 3, direction: directions.UP };
    this.snakePoints = [{ x: 8, y: 6 }, { x: 8, y: 5 }, { x: 8, y: 4 }, { x: 8, y: 3 }];
  }

  push(box) {
    this.snakePoints.push({ x: box.x, y: box.y });
    this.top.x = box.x;
    this.top.y = box.y;
  }

  shift() {
    const lastPoint = this.snakePoints[0];
    this.snakePoints.shift();
    return lastPoint;
  }
}

export default SnakeState;

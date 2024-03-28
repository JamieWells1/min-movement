const movements = [];
let x = 0;
let y = 0;
let angle = 0;
let turns = 0;

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    let direction = str.slice(i, i + 1);
    movements.push(direction);
  }

  for (let j = 0; j < movements.length; j++) {
    if (movements[j] === "L" && angle >= 90) {
      angle -= 90;
    } else if (movements[j] === "L" && angle === 0) {
      angle = 270;
    } else if (movements[j] === "R" && angle <= 180) {
      angle += 90;
    } else if (movements[j] === "R" && angle === 270) {
      angle = 0;
    } else {
      angle += 0;
    }

    if (movements[j] === "F") {
      if (angle === 0 || angle === 360) {
        y += 1;
      } else if (angle === 90) {
        x += 1;
      } else if (angle === 180) {
        y -= 1;
      } else if (angle === 270) {
        x -= 1;
      }
    } else {
      x += 0;
      y += 0;
    }
  }

  if (x > 0) {
    turns += (((270 - angle) / 90) ** 2) ** (1 / 2);
    turns += (x ** 2) ** (1 / 2);
  }

  if (x < 0) {
    turns += (((90 - angle) / 90) ** 2) ** (1 / 2);
    turns += (x ** 2) ** (1 / 2);
  }

  if (y > 0) {
    turns += (((180 - angle) / 90) ** 2) ** (1 / 2);
    turns += (y ** 2) ** (1 / 2);
  }

  if (y < 0) {
    turns += (((0 - angle) / 90) ** 2) ** (1 / 2);
    turns += (y ** 2) ** (1 / 2);
  }

  // Squaring and then square rooting numbers to get the positive variant without converting positives to negatives is my secret weapon!

  return turns;
}

// assembly/index.ts

export class Robot {
  x: f64;
  y: f64;
  z: f64;
  speed: f64;

  constructor(x: f64, y: f64, z: f64, speed: f64) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.speed = speed;
  }

  updatePosition(): void {
      this.x += this.speed;
      if (this.x > 20) {
          this.x = -20;
      }
  }
}

export const robots: Robot[] = [];

export function createRobots(count: i32): void {
  for (let i = 0; i < count; i++) {
      let x = Math.random() * 40 - 20;
      let y = 1;
      let z = Math.random() * 40 - 20;
      let speed = Math.random() * 0.05 + 0.01;
      robots.push(new Robot(x, y, z, speed));
  }
}

export function updateRobots(): void {
  for (let i = 0; i < robots.length; i++) {
      robots[i].updatePosition();
  }
}

export function getRobotX(index: i32): f64 {
  return robots[index].x;
}

export function getRobotZ(index: i32): f64 {
  return robots[index].z;
}

export function getRobotSpeed(index: i32): f64 {
  return robots[index].speed;
}

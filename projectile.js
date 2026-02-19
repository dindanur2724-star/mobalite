const bullets = [];

function shoot(from, targetX, targetY, dmg) {
  bullets.push({
    x: from.x,
    y: from.y,
    vx: (targetX - from.x) / 30,
    vy: (targetY - from.y) / 30,
    damage: dmg
  });
}

function updateBullets(enemies) {
  bullets.forEach(b => {
    b.x += b.vx;
    b.y += b.vy;

    enemies.forEach(e => {
      if (Math.hypot(b.x-e.x, b.y-e.y) < 20) {
        e.hp -= b.damage;
        b.dead = true;
      }
    });
  });
}

function drawBullets(ctx) {
  ctx.fillStyle = "yellow";
  bullets.forEach(b => ctx.fillRect(b.x, b.y, 6, 6));
}

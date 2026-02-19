const monsters = [];

for (let i = 0; i < 6; i++) {
  monsters.push({
    x: 300 + Math.random()*400,
    y: 100 + Math.random()*400,
    hp: 60
  });
}

function updateMonsters(hero) {
  monsters.forEach(m => {
    if (Math.hypot(hero.x-m.x, hero.y-m.y) < 40) {
      hero.hp -= 0.3;
    }
  });
}

function drawMonsters(ctx) {
  ctx.fillStyle = "#166534";
  monsters.forEach(m => ctx.fillRect(m.x, m.y, 30, 30));
}

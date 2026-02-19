const plants = [];

for (let i = 0; i < 50; i++) {
  plants.push({
    x: Math.random() * 1000,
    y: Math.random() * 600,
    r: 20 + Math.random() * 30,
    color: `hsl(${Math.random()*120},70%,30%)`
  });
}

function drawForest(ctx) {
  plants.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

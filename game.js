const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// PILIH HERO PERTAMA
let hero = { ...HEROES[0], x: 100, y: 300, size: 24, speed: 3 };

// TEAM AI (4 TEMAN)
const allies = [];
for (let i = 0; i < 4; i++) {
  allies.push({
    x: 120,
    y: 100 + i*100,
    hp: 80,
    color: "#4ade80"
  });
}

// ENEMY TEAM
const enemies = [];
for (let i = 0; i < 5; i++) {
  enemies.push({
    x: 800,
    y: 80 + i*90,
    hp: 90,
    color: "#ef4444"
  });
}

// INPUT
const keys = {};
document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

// GERAK HERO
function moveHero() {
  hero.x += (keys.d ? hero.speed : 0) - (keys.a ? hero.speed : 0);
  hero.y += (keys.s ? hero.speed : 0) - (keys.w ? hero.speed : 0);
}

// SERANG
function attack() {
  if (!keys[" "]) return;

  enemies.forEach(e => {
    const d = Math.hypot(hero.x - e.x, hero.y - e.y);
    if (d < 60) e.hp -= hero.damage;
  });
}

// TEMBAKAN
function rangedAttack() {
  if (keys["q"]) shoot(hero, enemies[0].x, enemies[0].y, hero.damage);
}

// AI MUSUH
function enemyAI() {
  enemies.forEach(e => {
    e.x -= 0.5;
    if (Math.hypot(hero.x - e.x, hero.y - e.y) < 40) {
      hero.hp -= 0.2;
    }
  });
}

// DRAW CHARACTER
function drawChar(c) {
  ctx.fillStyle = c.color;
  ctx.fillRect(c.x, c.y, 25, 25);
}

// LOOP
function loop() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawForest(ctx);
  drawMonsters(ctx);

  moveHero();
  attack();
  rangedAttack();
  enemyAI();
  updateMonsters(hero);
  updateBullets(enemies);

  drawBullets(ctx);

  drawChar(hero);
  allies.forEach(drawChar);
  enemies.forEach(drawChar);

  if (hero.hp <= 0) {
    alert("KAMU TERSUNGKUR DI HUTAN 🌲");
    location.reload();
  }

  if (enemies.every(e => e.hp <= 0)) {
    alert("TIM KAMU MENANG! 🏆");
    location.reload();
  }

  requestAnimationFrame(loop);
}

loop();

let joy = { x: 0, y: 0 };

document.addEventListener("touchmove", e => {
  joy.x = (e.touches[0].clientX - 150) / 50;
  joy.y = (e.touches[0].clientY - 400) / 50;
});

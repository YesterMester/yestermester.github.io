// fixCanvas.js
(function() {
  // Check if canvas already exists
  let existingCanvas = document.getElementById('star-canvas');
  if (!existingCanvas) {
    const canvas = document.createElement('canvas');
    canvas.id = 'star-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 150;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function random(min,max){ return Math.random()*(max-min)+min; }

    for(let i=0;i<numStars;i++){
      stars.push({
        x: random(0,canvas.width),
        y: random(0,canvas.height),
        r: random(0.5,2),
        dx: random(-0.2,0.2),
        dy: random(-0.2,0.2)
      });
    }

    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let star of stars){
        star.x += star.dx;
        star.y += star.dy;

        if(star.x < 0) star.x = canvas.width;
        if(star.x > canvas.width) star.x = 0;
        if(star.y < 0) star.y = canvas.height;
        if(star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
})();

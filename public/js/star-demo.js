// document.addEventListener('DOMContentLoaded', function () {
//     particleground(document.getElementById('particles-container'), {
//       dotColor: '#888',
//       lineColor: '#888',
//       parallax: false,
//       directionX: 'center',
//       directionY : 'center',
//       particleRadius: 4,
//       lineWidth: 0.2,
//       density: 3000
//     });

    
//     // var intro = document.getElementById('particles');
//     // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
// }, false);

document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles-header'), {
      dotColor: '#888',
      lineColor: '#888',
      parallax: false,
      directionX: 'center',
      directionY : 'center',
      particleRadius: 4,
      lineWidth: 0.2,
      density: 2500
    });

    
    // var intro = document.getElementById('particles');
    // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }, false);

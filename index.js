let isMobile = false;
const cursor = $('#cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let targetScale = 1;
let growInterval;


$(document).on('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(document).on('mousedown', function() {
  cursor.addClass('click');
  clearInterval(growInterval);
  growInterval = setInterval(function(){
    targetScale += 0.05;
    if (targetScale >= 1.5) {
      clearInterval(growInterval);
    }
  }, 10);
});

$(document).on('mouseup', function() {
  cursor.removeClass('click');
  clearInterval(growInterval);
  growInterval = setInterval(function(){
    targetScale -= 0.05;
    if (targetScale <= 1) {
      clearInterval(growInterval);
    }
}, 10);
});

function animate() {
    let distance = Math.sqrt(Math.pow(cursorX - mouseX, 2) + Math.pow(cursorY - mouseY, 2));

    // 200px distance = scale 0.5
    // 0px distance = scale 1
    distance = distance > 200 ? 200 : distance; // ceil distance to 200
    // 0 <= (distance / 200) <= 1

    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.css({
        transform: 'translate(-50%, -50%) scale(' + (targetScale - (distance / 200) * 0.5) + ')',
        left: cursorX + 'px',
        top: cursorY + 'px'
    });

    if (!isMobile) {
      requestAnimationFrame(animate);
    } else {
      cursor.css({
        display: 'none'
      });
    }
}


function checkIfMobile() {
  if ($(window).width() <= 768) {
      isMobile = true;
  } else {
      isMobile = false;
      cursor.css({
        display: 'block'
      });
      animate();
  }
}

$(window).on('resize', function() {
  checkIfMobile()
});

checkIfMobile();
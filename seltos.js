// JavaScript to change the navbar background when scrolling
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
  
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  function changeCarColor(color) {
    const carImage = document.getElementById('car-image');
    const colorCircles = document.querySelectorAll('.color-circle');
  
    // Change the image source based on the selected color
    switch (color) {
      case 'red':
        carImage.src = 'images/08-d (2).png';
        break;
      case 'blue':
        carImage.src = 'images/08-d.png';
        break;
      case 'green':
        carImage.src = 'images/08-d (1).png';
        break;
      case 'white':
        carImage.src = 'images/08-d (4).png';
        break;
      case 'black':
        carImage.src = 'images/08-d (3).png';
        break;    
      // Add more cases for other colors and corresponding image paths
    }
  
    // Update the selected color circle's style
    colorCircles.forEach(circle => {
      circle.classList.remove('selected');
      if (circle.style.backgroundColor === color) {
        circle.classList.add('selected');
      }
    });
  }
  changeCarColor('red');

  const video = document.getElementById('interactive-video');
  const annotations = document.querySelectorAll('.annotation');
  annotations.forEach(annotation => {
    annotation.addEventListener('click', () => {
      const time = parseInt(annotation.getAttribute('data-time'));
      video.currentTime = time;
    });
  });
  
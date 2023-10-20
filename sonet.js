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
        carImage.src = 'images/redsonet.png';
        break;
      case 'blue':
        carImage.src = 'images/bluesonet.png';
        break;
      case 'green':
        carImage.src = 'images/blacksonet.png';
        break;
      case 'white':
        carImage.src = 'images/whitesonet.png';
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

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
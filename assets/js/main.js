// Button to go up 
let btn = document.querySelector(".up")
  console.log (window.length)
  // Show the button when the user scrolls 500 pixels down from the top of the page
  window.addEventListener("scroll", function() {
    if (window.scrollY >= 500) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  // Smoothly scroll back to the top when the button is clicked
  btn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to show the button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Function to scroll to top when the button is clicked
scrollToTopBtn.onclick = function () {
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

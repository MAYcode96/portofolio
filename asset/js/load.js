

// Hide loader when page fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  
  // Fade out effect
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // Delay matches the fade-out duration
});
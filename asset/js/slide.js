const slideElements = document.querySelectorAll(
  ".content-body, .box-skill, .box-edu"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

slideElements.forEach((element) => observer.observe(element));

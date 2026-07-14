// Contact form submission (non-functional demo)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual submission
    alert("Thank you for reaching out! This form is a demo.");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example: Highlight skills on hover
const skills = document.querySelectorAll("#skills li");
skills.forEach(skill => {
  skill.addEventListener("mouseover", () => {
    skill.style.color = "#2e7d32";
    skill.style.fontWeight = "bold";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.color = "#333";
    skill.style.fontWeight = "normal";
  });
});

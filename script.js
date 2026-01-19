const toggles = document.querySelectorAll(".themeToggle");
const body = document.body;

function updateThemeUI() {
  toggles.forEach(toggle => {
    const icon = toggle.querySelector(".themeIcon");
    const text = toggle.querySelector(".themeText");

    if (body.classList.contains("light-mode")) {
      icon.src = "assets/icons/night-mode.png";
      if (text) text.textContent = "Dark Mode";
    } else {
      icon.src = "assets/icons/light-mode.png";
      if (text) text.textContent = "Light Mode";
    }
  });
}

// Add click listeners
toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    updateThemeUI();
  });
});

// Initialize UI
updateThemeUI();

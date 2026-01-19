const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const text = document.getElementById("themeText");
  const body = document.body;

  function updateThemeUI() {
    if (body.classList.contains("light-mode")) {
      icon.src = "/assets/icons/night-mode.png";
      text.textContent = "Dark Mode";
    } else {
      icon.src = "/assets/icons/light-mode.png";
      text.textContent = "Light Mode";
    }
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    updateThemeUI();
  });

  // Set correct icon on page load
  updateThemeUI();
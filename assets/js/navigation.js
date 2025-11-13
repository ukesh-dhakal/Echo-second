(function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    if (window.innerWidth < 1024) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      toggle.setAttribute("aria-expanded", "false");
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      menu.classList.remove("hidden");
      menu.classList.remove("flex");
      toggle.setAttribute("aria-expanded", "false");
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      toggle.setAttribute("aria-expanded", "false");
    }
  };

  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    const isOpen = !menu.classList.contains("hidden");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", handleResize);
  handleResize();
})();

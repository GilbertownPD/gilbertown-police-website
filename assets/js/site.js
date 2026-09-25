// Gilbertown Police Department - shared site script (used by every page).

// Explore menu: open/close with the button, close with Escape or a tap outside.
(function () {
  const menuButton = document.getElementById("explore-button");
  const siteMenu = document.getElementById("site-menu");
  if (!menuButton || !siteMenu) return;

  function setMenu(open) {
    siteMenu.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  menuButton.addEventListener("click", () => {
    setMenu(!siteMenu.classList.contains("open"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteMenu.classList.contains("open")) {
      setMenu(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteMenu.classList.contains("open")) return;
    if (siteMenu.contains(event.target) || menuButton.contains(event.target)) return;
    setMenu(false);
  });
})();

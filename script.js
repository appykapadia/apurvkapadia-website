const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", () => {
    form.querySelector("button")?.setAttribute("disabled", "true");
  });
});

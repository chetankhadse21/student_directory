const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

if (menuToggle && sideMenu && closeMenu) {
  menuToggle.addEventListener("click", () => {
      sideMenu.style.transform = "translateX(0)";
  });

  closeMenu.addEventListener("click", () => {
      sideMenu.style.transform = "translateX(-250px)";
  });
}











const btn = document.querySelector(".dropbtn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", (event) => {
  event.stopPropagation(); // prevent closing immediately
  menu.classList.toggle("show");
});

// Close dropdown when clicking anywhere else
document.addEventListener("click", () => {
  menu.classList.remove("show");
});



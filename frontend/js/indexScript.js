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











const sectionBtn = document.getElementById("sectionBtn");
const semesterMenu = document.getElementById("semesterMenu");

sectionBtn.addEventListener("click", () => {
    if (semesterMenu.style.display === "none") {
        semesterMenu.style.display = "block";
    } else {
        semesterMenu.style.display = "none";
    }
});

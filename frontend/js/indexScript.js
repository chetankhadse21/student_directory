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









// js for semister option

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










// js for the cards to display
const cardContainer = document.getElementById("cardContainer");

document.querySelectorAll(".show-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        showCards(type);
    });
});

function showCards(type) {
    cardContainer.innerHTML = ""; // Clear previous cards

    let title = "";
    let count = 5;

    if (type === "books") title = "Book";
    else if (type === "assignments") title = "Assignment";
    else if (type === "notes") title = "Note";
    else title = "Item";

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerText = `${title} ${i}`;
        cardContainer.appendChild(card);
    }
}


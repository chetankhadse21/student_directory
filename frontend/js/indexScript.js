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










// according to the user input 
let selectedSemester = null;

// JS for semester selection
const semesterLinks = document.querySelectorAll(".dropdown-content a");
semesterLinks.forEach((sem, index) => {
    sem.addEventListener("click", (event) => {
        event.preventDefault();
        selectedSemester = index + 1; // Semester 1 → value 1
        btn.innerText = `Semester ${selectedSemester}`; // show selected sem on button
        menu.classList.remove("show");
        cardContainer.innerHTML = ""; // clear cards after semester change
    });
});








// logic for cards

function showCards(type) {

    if (!selectedSemester) {
        alert("Please select a semester first!");
        return;
    }

    cardContainer.innerHTML = ""; // Clear previous cards

    let title = "";
    let count = 5;

    if (type === "books") title = "Book";
    else if (type === "assignments") title = "Assignment";
    else if (type === "notes") title = "Note";
    else if (type === "attendance") {
        title = "Attendance";
        count = 1; // ONLY ONE CARD
    } 
    else title = "Item";

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        
        if (type === "attendance") {
            card.innerText = `${title} (Sem ${selectedSemester})`;
        } else {
              card.innerHTML = `
        <i class='bx bx-book'></i>
        ${title} ${type === "attendance" ? "" : i} <br>
        <span style="font-size:14px; opacity:0.8;">Sem ${selectedSemester}</span>
        `;

        }

        cardContainer.appendChild(card);
    }
}


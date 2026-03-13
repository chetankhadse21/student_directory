/* ================================================
   indexScript.js — Premium UI Interactions
================================================= */

// =====================
// SIDEBAR
// =====================
const menuToggle = document.getElementById("menuToggle");
const sideMenu   = document.getElementById("sideMenu");
const closeMenu  = document.getElementById("closeMenu");
const overlay    = document.getElementById("sideOverlay");

function openSidebar() {
    if (!sideMenu) return;
    sideMenu.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    if (!sideMenu) return;
    sideMenu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
}

if (menuToggle) menuToggle.addEventListener("click", openSidebar);
if (closeMenu)  closeMenu.addEventListener("click", closeSidebar);
if (overlay)    overlay.addEventListener("click", closeSidebar);


// =====================
// SEMESTER DROPDOWN
// =====================
const dropBtn  = document.querySelector(".dropbtn");
const dropMenu = document.querySelector(".dropdown-content");

if (dropBtn && dropMenu) {
    const chevron = dropBtn.querySelector(".bx-chevron-down");

    dropBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropMenu.classList.toggle("show");
        if (chevron) chevron.style.transform = isOpen ? "rotate(180deg)" : "";
    });

    document.addEventListener("click", () => {
        dropMenu.classList.remove("show");
        if (chevron) chevron.style.transform = "";
    });
}


// =====================
// SEMESTER SELECTION
// =====================
let selectedSemester = null;
const semesterLinks  = document.querySelectorAll(".dropdown-content a");
const cardContainer  = document.getElementById("cardContainer");

if (semesterLinks.length > 0 && dropBtn) {
    semesterLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            selectedSemester = index + 1;
            dropBtn.childNodes[2].textContent = `Semester ${selectedSemester} `;
            dropMenu.classList.remove("show");
            if (cardContainer) cardContainer.innerHTML = "";
            // Reset active category button
            document.querySelectorAll(".show-btn").forEach(b => b.classList.remove("active"));
        });
    });
}


// =====================
// CATEGORY BUTTONS
// =====================
const showBtns = document.querySelectorAll(".show-btn");

if (showBtns.length > 0) {
    showBtns.forEach(button => {
        button.addEventListener("click", () => {
            showBtns.forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            const type = button.getAttribute("data-type");
            showCards(type);
        });
    });
}


// =====================
// GOFILE LINKS
// =====================
const fileLinks = {
    books: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    },
    assignments: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    },
    notes: {
        1: "https://gofile.io/d/q0tK3p",
        2: "https://gofile.io/d/q0tK3p",
        3: "https://gofile.io/d/q0tK3p",
        4: "https://gofile.io/d/q0tK3p",
        5: "https://gofile.io/d/q0tK3p"
    }
};

const typeIcons = {
    books:       "bx-book-open",
    assignments: "bx-edit-alt",
    notes:       "bx-note",
    attendance:  "bx-check-circle"
};

function showCards(type) {
    if (!selectedSemester) {
        // Shake the semester button to hint
        if (dropBtn) {
            dropBtn.style.animation = "none";
            dropBtn.style.borderColor = "var(--accent-pink)";
            dropBtn.style.boxShadow    = "0 0 20px rgba(236,72,153,0.5)";
            setTimeout(() => {
                dropBtn.style.borderColor = "";
                dropBtn.style.boxShadow   = "";
            }, 1200);
        }
        return;
    }

    if (!cardContainer) return;
    cardContainer.innerHTML = "";

    const label  = type.charAt(0).toUpperCase() + type.slice(0, -1);  // e.g. "Book"
    const icon   = typeIcons[type] || "bx-file";
    const count  = type === "attendance" ? 1 : 5;

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${(i - 1) * 50}ms`;

        if (type === "attendance") {
            card.innerHTML = `
                <i class='bx ${icon}'></i>
                <h3>Attendance</h3>
                <p>Semester ${selectedSemester}</p>
                <div class="btn-group">
                    <a class="preview-btn" href="#"><i class='bx bx-show'></i> View</a>
                </div>
            `;
        } else {
            const fileUrl = fileLinks[type]?.[i] || "#";
            card.innerHTML = `
                <i class='bx ${icon}'></i>
                <h3>${label} ${i}</h3>
                <p>Semester ${selectedSemester}</p>
                <div class="btn-group">
                    <a class="preview-btn" href="${fileUrl}" target="_blank" rel="noopener">
                        <i class='bx bx-show'></i> Preview
                    </a>
                    <a class="download-btn" href="${fileUrl}" download>
                        <i class='bx bx-download'></i> Save
                    </a>
                </div>
            `;
        }

        // Animate card in
        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";
        cardContainer.appendChild(card);
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, (i - 1) * 55);
        });
    }
}


// =====================
// NOTIFICATION DISMISS
// =====================
const closeNoteBtn = document.querySelector(".close-note");
if (closeNoteBtn) {
    closeNoteBtn.onclick = () => {
        const bar = document.getElementById("notificationBar");
        if (bar) {
            bar.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            bar.style.opacity    = "0";
            bar.style.transform  = "translateY(-8px)";
            setTimeout(() => (bar.style.display = "none"), 300);
        }
    };
}


// =====================
// THEME TOGGLE
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const darkToggle = document.getElementById("darkToggle");
    if (!darkToggle) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkToggle.textContent = "☀️";
    }

    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        darkToggle.textContent = isDark ? "☀️" : "🌙";
    });
});

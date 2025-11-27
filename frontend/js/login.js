// LOGIN / REGISTER SWITCH
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});


// SIDEBAR OPEN / CLOSE
const sideMenu = document.getElementById("sideMenu");
const closeMenuBtn = document.getElementById("closeMenu");

// Open sidebar
function openSidebar() {
    sideMenu.classList.add("open");
}

// Close sidebar
closeMenuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});



console.log("JS IS RUNNING");





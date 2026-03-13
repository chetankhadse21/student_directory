// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const token      = localStorage.getItem("access");
    const usernameEl = document.getElementById("username");
    const logoutBtn  = document.getElementById("logoutBtn");
    const userAvatar = document.getElementById("userAvatar");

    if (!token) {
        window.location.href = "/login/";
    } else {
        fetch("/api/dashboard/", {
            headers: { "Authorization": "Bearer " + token }
        })
        .then(res => {
            if (res.status === 401) {
                localStorage.clear();
                window.location.href = "/login/";
            }
            return res.json();
        })
        .then(data => {
            if (data.user) {
                const uname = data.user.username || "Student";
                const email = data.user.email    || "";

                // Subtitle below avatar
                if (usernameEl) usernameEl.innerText = email;

                // Avatar initial
                if (userAvatar) userAvatar.innerText = uname.charAt(0).toUpperCase();

                // Name in pill header
                const pillName = document.querySelector(".user-pill-text strong");
                if (pillName) pillName.innerText = uname;
            }
        })
        .catch(err => {
            console.error(err);
            if (usernameEl) usernameEl.innerText = "Error loading user info";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.href = "/login/";
        });
    }
});

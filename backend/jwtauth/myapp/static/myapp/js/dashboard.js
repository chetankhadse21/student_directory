// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("access");
    const usernameEl = document.getElementById("username");
    const logoutBtn = document.getElementById("logoutBtn");

    if (!token) {
        window.location.href = "/login/";
    } else {
        fetch("/api/dashboard/", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        .then(res => {
            if (res.status === 401) {
                localStorage.clear();
                window.location.href = "/login/";
            }
            return res.json();
        })
        .then(data => {
            if (usernameEl && data.user) {
                usernameEl.innerText = `Welcome, ${data.user.username} (${data.user.email})`;
            }
        })
        .catch(err => {
            console.error(err);
            if (usernameEl) {
                usernameEl.innerText = "Error loading user info";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "/login/";
        });
    }
});

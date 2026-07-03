document.addEventListener("DOMContentLoaded", () => {

    const userId = localStorage.getItem("lsm_user_id");
    const userName = localStorage.getItem("lsm_user_name");

    const loginBtn = document.getElementById("login-btn");
    const userProfile = document.getElementById("user-profile");
    const userAvatar = document.getElementById("user-avatar");
    const userNameText = document.getElementById("user-name");

    if (userId && userName) {

    const heroJoinBtn = document.getElementById("hero-join-btn");
    const continueBtn = document.getElementById("continue-btn");

    const journeyBtn = document.getElementById("journey-btn");
    const dashboardBtn = document.getElementById("dashboard-btn");

    const offerSection = document.getElementById("offer-section");

    if (heroJoinBtn) heroJoinBtn.style.display = "none";
    if (continueBtn) continueBtn.style.display = "inline-flex";

    if (journeyBtn) journeyBtn.style.display = "none";
    if (dashboardBtn) dashboardBtn.style.display = "inline-flex";

    if (offerSection) offerSection.style.display = "none";

    if (loginBtn) loginBtn.style.display = "none";

    if (userProfile) userProfile.style.display = "flex";

if (userNameText) userNameText.textContent = userName;



    const initials = userName
        .split(" ")
        .map(word => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();

   if (userAvatar) userAvatar.textContent = initials;

    if (userProfile) {
    userProfile.onclick = () => {
        window.location.href = "dashboard.html";
    };
}
}

});
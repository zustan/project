document.addEventListener("DOMContentLoaded", () => {

    let cookieConsentBanner = document.getElementById("cookie-consent-banner");

    let cookieConsentBtnAccept = document.getElementById("cookie-consent-btn-accept");

    let cookieConsentBtnDecline = document.getElementById("cookie-consent-btn-decline");


    cookieConsentBtnAccept.addEventListener("click", () => {
        cookieConsentBanner.style.opacity = "0";
        cookieConsentBanner.style.visibility = "hidden";
    });

    cookieConsentBtnDecline.addEventListener("click", () => {
        alert("Wenn du nicht einverstanden bist, kannst du unsere Website nicht benutzen.");
    });
});

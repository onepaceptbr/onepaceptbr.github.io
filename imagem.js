const imgSrc = "https://ugc.production.linktr.ee/51964943-7425-4d76-8b9a-f6b098ca0d17_2024-11-09-17-35-37-Impel-Down-01.mkv---Reprodutor-de-M-dias-VLC.png?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

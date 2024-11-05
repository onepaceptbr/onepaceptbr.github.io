const imgSrc = "https://ugc.production.linktr.ee/d44d1895-9c37-47a7-a578-c8ffe416ff5c_2024-11-05-14-33-15-Sabaody-Archipelago-01.mkv---Reprodutor-de-M-dias-VLC.png?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

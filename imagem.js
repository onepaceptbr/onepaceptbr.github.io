const imgSrc = "https://ugc.production.linktr.ee/c951f80b-6809-4a1b-8001-dfc1819a7247_2024-10-14-09-42-50-Water-Seven-06.mkv---Reprodutor-de-M-dias-VLC.png";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

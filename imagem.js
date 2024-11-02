const imgSrc = "https://ugc.production.linktr.ee/710eda2e-30c0-45c0-a888-17bb708667a7_2024-11-02-15-32-20-Thriller-Bark-16.mkv---Reprodutor-de-M-dias-VLC.png?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

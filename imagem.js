const imgSrc = "https://ugc.production.linktr.ee/0657701e-ed6a-4bee-a947-e51b033079b7_2024-10-18-00-36-32-Water-Seven-15---Departing-Shortly---Reprodutor-de-M-dias-VLC.png?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

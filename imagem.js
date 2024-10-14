const imgSrc = "https://static.wikia.nocookie.net/onepiece/images/a/ad/Diesel_Anime_Infobox.png/revision/latest?cb=20240725230822&path-prefix=pt";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

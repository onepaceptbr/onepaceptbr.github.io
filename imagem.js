const imgSrc = "https://static.wikia.nocookie.net/onepiece/images/2/21/Diesel_adquire_farinha.png/revision/latest?cb=20220421162704&path-prefix=pt";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

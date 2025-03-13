const imgSrc = "https://i.pinimg.com/474x/44/4d/2c/444d2c02993bc37e7d5cb0ed4eca75d2.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

const imgSrc = "https://ugc.production.linktr.ee/32df9299-f26f-4813-b43d-752d7c3c353a_brook-one-piece-378.jpeg";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

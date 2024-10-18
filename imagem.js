const imgSrc = "https://ugc.production.linktr.ee/14c48458-874d-4957-a0c7-ec8d893a6681_2024-10-18-10-55-48-25b24c4febab1fc9ddb1b06405f63c08.jpg--1200-675-.png?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

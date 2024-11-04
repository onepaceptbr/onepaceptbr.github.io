const imgSrc = "https://ugc.production.linktr.ee/7a9d5976-d64a-42d3-b8df-f7e42c53d68a_508688cb93baf902215c7ef01d4102ec.jpeg?io=true&size=avatar-v3_0";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

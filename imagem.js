const imgSrc = "https://geekdama.com.br/wp-content/uploads/2023/11/one-piece-episodio-405-arquipelago-sabaody-luffy-choro-desespero-postcover.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".foxy-img");
    imageElements.forEach(img => img.src = imgSrc);
});

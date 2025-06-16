function createCarousel(imagesList, parentElementSelector) {
    const parent = document.querySelector(parentElementSelector);

    const carousel = document.createElement("div");
    carousel.classList.add("carousel-container");

    const slides = imagesList.map((url, i) => {
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("carousel-image");
        if (i === 0) img.classList.add("active");
        carousel.appendChild(img);
        return img;
    });

    let current = 0;

    function showNext() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }

    setInterval(showNext, 3000);

    parent.appendChild(carousel);
}
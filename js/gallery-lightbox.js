(function () {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox-src]"));
    var lightbox = document.getElementById("gallery-lightbox");

    if (!items.length || !lightbox) {
        return;
    }

    var image = document.getElementById("lightbox-image");
    var title = document.getElementById("lightbox-title");
    var description = document.getElementById("lightbox-description");
    var closeButton = lightbox.querySelector(".lightbox-close");
    var previousButton = lightbox.querySelector(".lightbox-prev");
    var nextButton = lightbox.querySelector(".lightbox-next");
    var activeIndex = 0;
    var previousFocus = null;

    function openLightbox(index) {
        activeIndex = index;
        previousFocus = document.activeElement;
        updateLightbox();
        lightbox.hidden = false;
        document.body.classList.add("lightbox-open");
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        image.removeAttribute("src");
        image.alt = "";
        document.body.classList.remove("lightbox-open");

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    function updateLightbox() {
        var item = items[activeIndex];
        var imageTitle = item.dataset.lightboxTitle;
        var imageDescription = item.dataset.lightboxDescription;

        image.src = item.dataset.lightboxSrc;
        image.alt = imageTitle;
        title.textContent = imageTitle;
        description.textContent = imageDescription;
    }

    function showPrevious() {
        activeIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        updateLightbox();
    }

    function showNext() {
        activeIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        updateLightbox();
    }

    items.forEach(function (item, index) {
        item.addEventListener("click", function () {
            openLightbox(index);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    previousButton.addEventListener("click", showPrevious);
    nextButton.addEventListener("click", showNext);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (lightbox.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPrevious();
        }

        if (event.key === "ArrowRight") {
            showNext();
        }
    });
})();

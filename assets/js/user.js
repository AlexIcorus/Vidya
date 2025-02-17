document.addEventListener("DOMContentLoaded", () => {
    // Tab navigation functionality
    const tabBtn = document.querySelectorAll(".nav ul li");
    const tab = document.querySelectorAll(".tab");

    function tabs(panelIndex) {
        tab.forEach((node, index) => {
            node.style.display = index === panelIndex ? "block" : "none";
        });
        tabBtn.forEach((btn, index) => {
            if (index === panelIndex) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    // Initialize the "Posts" tab as default
    tabs(0);

    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tabs(index);
        });
    });

    // Handle bio text truncation
    const bio = document.querySelector(".bio");
    const maxLength = 100;

    function truncateBio() {
        if (bio.textContent.length > maxLength) {
            const fullText = bio.textContent;
            bio.dataset.fullText = fullText;
            bio.textContent = fullText.substring(0, maxLength) + "...";
            const seeMore = document.createElement("span");
            seeMore.id = "see-more-bio";
            seeMore.textContent = " See More";
            seeMore.style.cursor = "pointer";
            bio.appendChild(seeMore);

            seeMore.addEventListener("click", expandBio);
        }
    }

    function expandBio() {
        const fullText = bio.dataset.fullText;
        bio.textContent = fullText;
        const seeLess = document.createElement("span");
        seeLess.id = "see-less-bio";
        seeLess.textContent = " See Less";
        seeLess.style.cursor = "pointer";
        bio.appendChild(seeLess);

        seeLess.addEventListener("click", truncateBio);
    }

    truncateBio();

    // Handle notification alert font size
    const alertMessage = document.querySelector(".alert-message");
    if (alertMessage && parseInt(alertMessage.textContent, 10) > 9) {
        alertMessage.style.fontSize = "0.7rem";
    }
});

  
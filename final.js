document.addEventListener("DOMContentLoaded", function () {
    // CONNECT AND CONTAINER
    const connectButton = document.getElementById("connectButton");
    const closeButtons = document.querySelectorAll(".close-button");
    const cardContainers = document.querySelectorAll(".card-container");
    const backgroundOverlay = document.getElementById("backgroundOverlay");
    const loadingBarOverlay = document.getElementById("loadingBarOverlay");

    // CONNECT
    connectButton.addEventListener("click", () => {
        const isPending = connectButton.classList.contains("pending");
        connectButton.classList.toggle("pending", !isPending);
        connectButton.querySelector("span").textContent = isPending ? "Connect +" : "Pending...";
        connectButton.style.backgroundColor = "white";
        connectButton.style.color = "#0073b1";
    });

    // CONNECT ACTIVE
    connectButton.addEventListener("mousedown", () => {
        connectButton.classList.add("active");
        connectButton.style.backgroundColor = "#0073b1";
        connectButton.style.color = "#D8EFFB";
    });

    connectButton.addEventListener("mouseup", () => {
        connectButton.style.backgroundColor = "white";
        connectButton.style.color = "#0073b1";
        connectButton.classList.remove("active");
    });

    // CONTAINER
    cardContainers[0].style.display = "block";
    cardContainers[1].style.display = "none";

    // CONTAINER ANIMATION
    function switchCards(currentCard, nextCard) {
        currentCard.classList.add("fadeOut");
        setTimeout(() => {
            currentCard.style.display = "none";
            currentCard.classList.remove("fadeOut");

            nextCard.style.display = "block";
            nextCard.classList.add("fadeIn", "slideIn");

            setTimeout(() => {
                nextCard.classList.remove("fadeIn", "slideIn");
            }, 500);
        }, 500);
    }

    // CLOSE
    closeButtons.forEach((button, index) => {
        button.addEventListener("mouseup", () => {
            const currentCard = cardContainers[index];
            const nextCard = cardContainers[(index + 1) % cardContainers.length];
            switchCards(currentCard, nextCard);
        });
    });

    // PROFILE
    cardContainers.forEach((container) => {
        const profilePicture = container.querySelector(".profile-picture img");

        profilePicture.addEventListener("mouseup", () => {
            container.classList.add("blurred");
            backgroundOverlay.style.display = "block";
            loadingBarOverlay.style.display = "block";

            setTimeout(() => {
                loadingBarOverlay.style.display = "none";
                backgroundOverlay.style.display = "none";
                container.classList.remove("blurred");

                window.open("https://www.linkedin.com", "_blank");
            }, 1500);
        });
    });
});

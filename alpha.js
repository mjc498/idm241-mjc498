document.addEventListener("DOMContentLoaded", function () {
    const connectButton = document.getElementById("connectButton");
    const closeButtons = document.querySelectorAll('.close-button'); 
    const cardContainers = document.querySelectorAll('.card-container'); 

    connectButton.addEventListener("click", () => {
        if (!connectButton.classList.contains("pending")) {
            connectButton.classList.add("pending");
            connectButton.querySelector("span").textContent = "Pending...";
            connectButton.style.backgroundColor = "white"; 
            connectButton.style.color = "#0073b1"; 
        } else {
            connectButton.classList.remove("pending");
            connectButton.querySelector("span").textContent = "Connect +";
            connectButton.style.backgroundColor = "white"; 
            connectButton.style.color = "#0073b1";
        }
    });

    connectButton.addEventListener("mousedown", () => {
        connectButton.classList.add("active");
        connectButton.style.backgroundColor = "#0073b1"; 
        connectButton.style.color = "#D8EFFB"; 
    });
    
    connectButton.addEventListener("mouseup", () => {
        if (connectButton.classList.contains("pending")) {
            connectButton.style.backgroundColor = "white"; 
            connectButton.style.color = "#0073b1"; 
        } else {
            connectButton.style.backgroundColor = "white"; 
            connectButton.style.color = "#0073b1"; 
        }
        connectButton.classList.remove("active");
    });

    cardContainers[0].style.display = 'block'; 
    cardContainers[1].style.display = 'none'; 

    function switchCards(currentCard, nextCard) {
        const closeButton = currentCard.querySelector('.close-button');
        closeButton.style.animation = 'slideOut 0.5s forwards, bounce 0.5s forwards';

        setTimeout(() => {
            currentCard.style.display = 'none'; 
            nextCard.style.display = 'block'; 
            nextCard.style.animation = 'slideIn 0.5s forwards'; 
        }, 500);
    }

    closeButtons.forEach((button, index) => {
        button.addEventListener('mouseup', () => {
            const currentCard = cardContainers[index];
            const nextCard = cardContainers[(index + 1) % cardContainers.length]; 
            switchCards(currentCard, nextCard);
        });
    });
});


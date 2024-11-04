document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.querySelector('.connect-button');

    connectButton.addEventListener('mousedown', function() {
        connectButton.classList.remove('pending'); // Reset to default state on mouse down
        connectButton.querySelector("span").textContent = "Connect +"; // Reset text
    });

    connectButton.addEventListener('mouseup', function() {
        connectButton.classList.add('pending'); // Add pending class on mouse up
        connectButton.querySelector("span").textContent = "Pending..."; // Change text to "Pending..."
    });
});

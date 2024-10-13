document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.querySelector('.connect-button');

    connectButton.addEventListener('mousedown', function() {
        connectButton.classList.add('active');
    });

    connectButton.addEventListener('mouseup', function() {
        connectButton.classList.remove('active');
    });

    connectButton.addEventListener('mouseleave', function() {
        connectButton.classList.remove('active');
    });

    connectButton.addEventListener('click', function() {
        // Check if the button is currently in the pending state
        if (connectButton.classList.contains('pending')) {
            // Change button text back to "Connect"
            connectButton.textContent = '+ Connect';
            // Remove the pending class to revert styles
            connectButton.classList.remove('pending');
            connectButton.disabled = false; // Re-enable the button
        } else {
            // Change button text to "Pending"
            connectButton.textContent = 'Pending';
            // Add pending class to apply styles
            connectButton.classList.add('pending');
            connectButton.disabled = true; // Optionally disable the button
        }
    });
});
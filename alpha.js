document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.querySelector('.connect-button');

    connectButton.addEventListener('click', function() {
        if (connectButton.classList.contains('Pending...')) {
            connectButton.textContent = '+ Connect'; 
            connectButton.classList.remove('Pending...');
        } else {
            connectButton.textContent = 'Pending...'; 
            connectButton.classList.add('Pending...'); 
        }
    });
});

let currentIndex = 0;
const clients = document.querySelectorAll('#client-list li');
const maxVisibleClients = 4;

function updateClientVisibility() {
    clients.forEach((client, index) => {
        client.style.display = 'none';
    });

    for (let i = 0; i < maxVisibleClients; i++) {
        let index = (currentIndex + i) % clients.length;
        clients[index].style.display = 'inline-block';
    }
}

function prevClient() {
    currentIndex = (currentIndex - 1 + clients.length) % clients.length;
    if (currentIndex < 0) {
        currentIndex = clients.length - 1;
    }
    updateClientVisibility();
}

function nextClient() {
    currentIndex = (currentIndex + 1) % clients.length;
    updateClientVisibility();
}

// Initialize visibility
updateClientVisibility();




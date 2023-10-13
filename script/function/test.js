const displayContent = () => {
    function afficherEvenements(events) {
        let eventsContainer = document.getElementById('events-container');
    
        events.forEach(event => {
            let eventParagraph = document.createElement('p');
            eventParagraph.textContent = `Nom de l'événement : ${event.name}, Description : ${event.description}`;
    
            eventsContainer.appendChild(eventParagraph);
        });
    }
    
    fetch('./backend/server/db/db.json')
        .then(response => response.json())
        .then(data => {
            afficherEvenements(data);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON', error));
    
};

export { displayContent };

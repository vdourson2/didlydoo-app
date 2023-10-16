
export function addEvent() {
    // Sélectionner le bouton par son ID
    const add = document.getElementById('addEvent');
    //sélecttionner la div modal par son ID
    const modal = document.getElementById('modal');
    //sélectionner le bouton send par son ID
    const send = document.getElementById('send');

    // Appeler un écouteur d'événement au clic sur le bouton "Add an event"
    add.addEventListener('click', () => {
        // Afficher le modal
        modal.style.display = 'block';
    });

    // Ajouter un écouteur d'événement pour masquer le modal lors de l'envoi du formulaire
    send.addEventListener('click', () => {
        // Cacher le modal 
        modal.style.display = 'none';
    });
}
// export { add }
// export { send }



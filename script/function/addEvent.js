
export function addEvent() {
    //sélectionner body
    const body = document.querySelector('body');
    // Sélectionner le bouton par son ID
    const add = document.getElementById('addEvent');
    //sélecttionner la div modal par son ID
    const modal = document.getElementById('modal');
    //sélectionner le bouton send par son ID
    const send = document.getElementById('send');

    const backgroundBlur = document.createElement('div');
    backgroundBlur.classList.add('background-blur');

    // Appeler un écouteur d'événement au clic sur le bouton "Add an event"
    add.addEventListener('click', () => {
        //enelève la class
        modal.classList.remove('hidden');
        body.appendChild(backgroundBlur);


    });

    // Ajouter un écouteur d'événement pour masquer le modal lors de l'envoi du formulaire
    send.addEventListener('click', () => {
        //remet la class
        modal.classList.add('hidden');
        body.removeChild(backgroundBlur);

    });
}
// export { add }
// export { send }



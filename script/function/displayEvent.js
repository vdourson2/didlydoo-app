import { editEvent } from "./editEvent";

const eventsContainer = document.getElementById('events-container');

function displayEvent(eventList) {
    
    eventList.forEach(event => {

        let eventID = event.id;

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = `${event.name}`;
        eventTitle.classList.add('event-title');

        const eventParagraph = document.createElement('p');
        eventParagraph.textContent = `${event.description}`;
        eventParagraph.classList.add('event-paragraph');

        //Lignes ajoutées/modifiées par Virginie pour faire apparaitre le bouton d'edit des cartes, 
        //afin de pouvoir tester la fonctionalité.
        //A supprimer après :
        const cardEdit = document.createElement('img');
        cardEdit.classList.add('card-edit');
        cardEdit.style.width = "20px";
        cardEdit.style.height = "20px";
        cardEdit.addEventListener('click', (e) => editEvent(e,eventID));
        cardEdit.setAttribute('src','icones/pencil-solid.svg')
        //Fin des lignes ajoutées/modifiées par Virginie

        // const cardEdit = document.createElement('a');
        // cardEdit.classList.add('card-edit');
        // cardEdit.textContent = 'Modify';
        // cardEdit.setAttribute('href', `./modifyEvent.html?id=${eventID}`);

        const eventTable = document.createElement('table');
        eventTable.classList.add('event-table');

        const eventTableR = document.createElement('tr');
        eventTableR.classList.add('event-table-r');

        const eventTableH1 = document.createElement('th');
        eventTableH1.classList.add('event-table-h');
        eventTableH1.textContent = 'Nom';
        eventTableR.appendChild(eventTableH1);

        for (let i = 0; i < event.dates.length; i++) {
            const date = event.dates[i];
            const eventTableDate = document.createElement('th');
            eventTableDate.classList.add('event-table-h');
            eventTableDate.textContent = date.date;
            eventTableR.appendChild(eventTableDate);
        }
        
        const eventTableR2 = document.createElement('tr');
        eventTableR2.classList.add('event-table-r');
        
        const eventTableCell = document.createElement('td');
        eventTableCell.classList.add('event-table-c');
        eventTableCell.textContent =` ${event.author}`;

        const eventInput = document.createElement('input');
        eventInput.classList.add('event-input');
        eventInput.setAttribute('type', 'text');


        eventTable.appendChild(eventTableR);
        eventTable.appendChild(eventTableR2);
        eventTableR2.appendChild(eventTableCell);

        eventsContainer.appendChild(eventTitle);
        eventsContainer.appendChild(eventParagraph);
        eventsContainer.appendChild(cardEdit);
        eventsContainer.appendChild(eventTable);
        eventsContainer.appendChild(eventInput);
    });
}

export { displayEvent }; 

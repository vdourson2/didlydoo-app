const eventsContainer = document.getElementById("events-container");

function displayEvent(eventList) {
    
    eventList.forEach(event => {

        let eventID = event.id;
        const cardEvent = document.createElement('div');
        cardEvent.classList.add('card-event');

    const eventTitle = document.createElement("h3");
    eventTitle.textContent = `Nom de l'événement ${event.name}`;
    eventTitle.classList.add("event-title");

    const eventParagraph = document.createElement("p");
    eventParagraph.textContent = `Description : ${event.description}`;
    eventParagraph.classList.add("event-paragraph");

    const cardEdit = document.createElement("a");
    cardEdit.classList.add("card-edit");
    cardEdit.textContent = "Modify";
    cardEdit.setAttribute("href", `./modifyEvent.html?id=${eventID}`);

    const eventTable = document.createElement("table");
    eventTable.classList.add("event-table");

        const eventTableR = document.createElement('tr');
        eventTableR.classList.add('event-table-r');

    const eventTableH1 = document.createElement("th");
    eventTableH1.classList.add("event-table-h");
    eventTableH1.textContent = "Nom";
    eventTableR.appendChild(eventTableH1);

        const eventTableCell = document.createElement('td');
        eventTableCell.classList.add('event-table-c');
        eventTableCell.textContent =` ${event.author}`;
        eventTableCell.style.textDecoration = "underline";
        eventTableR2.appendChild(eventTableCell);

        const uniqueNames = new Set();
         

        for (let i = 0; i < event.dates.length; i++) {
            const date = event.dates[i];
            const eventTableDate = document.createElement('th');
            eventTableDate.classList.add('event-table-h');
            eventTableDate.textContent = date.date;
            eventTableR.appendChild(eventTableDate);

            for (let j = 0; j < date.attendees.length; j++) {
                const attendee = date.attendees[j];
                uniqueNames.add(attendee.name); 
                
            }
            const radioContainer = document.createElement('td');
            const radio1 = document.createElement('input');
            radio1.setAttribute('type', 'radio');
            radio1.setAttribute('name', `${name}-avaible`); // Utilisez le nom comme identifiant unique pour les boutons radio
            const radio2 = document.createElement('input');
            radio2.setAttribute('type', 'radio');
            radio2.setAttribute('name', `${name}-away`); // Utilisez le nom comme identifiant unique pour les boutons radio
            radioContainer.appendChild(radio1);
            radioContainer.appendChild(radio2);
            eventTableR3.appendChild(radioContainer);
        }
        const uniqueNamesArray = Array.from(uniqueNames);
        for (let n = 0; n < uniqueNamesArray.length; n++) {
            const name = uniqueNamesArray[n];
            const eventTableMemberR = document.createElement('tr');
            const eventTableMember = document.createElement('td');
            eventTableMember.classList.add('event-table-member');
            eventTableMember.textContent = name;
            eventTableMemberR.appendChild(eventTableMember);
            eventTable.appendChild(eventTableMemberR);

        }

        const eventInput = document.createElement('input');
        eventInput.classList.add('event-input');
        eventInput.setAttribute('type', 'text');

        const eventDelButton = document.createElement("input");
        eventDelButton.classList.add('event-btn-delete')
        eventDelButton.setAttribute('type', 'button');
        eventDelButton.setAttribute('value', 'delete');

        cardEvent.appendChild(eventTitle);
        cardEvent.appendChild(eventParagraph);
        cardEvent.appendChild(cardEdit);
        cardEvent.appendChild(eventTable);
        cardEvent.appendChild(eventInput);
        cardEvent.appendChild(eventDelButton);
        eventsContainer.appendChild(cardEvent);
    });
}

export { displayEvent };

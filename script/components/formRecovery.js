// import de la fonction postEvents
import { postEvents } from "../data/fetchData.js";

// ciblage des éléments du DOM
const nameEvent = document.getElementById("eventTitle");
const descriptionEvent = document.getElementById("description");
const authorEvent = document.getElementById("author");
const dateEvent = document.querySelector(".date");
const btnAddEvent = document.getElementById("send");

// fonction qui récupère les valeurs des champs du formulaire
const superBtn = () => {
  // evenement au clic sur le bouton d'envoi du formulaire
  btnAddEvent.addEventListener("click", () => {
    // création d'un objet contenant les valeurs des champs du formulaire
    const eventObject = {
      name: nameEvent.value,
      description: descriptionEvent.value,
      author: authorEvent.value,
      date: [],
    };

    // création d'un tableau contenant les dates de l'évènement
    const datestring = dateEvent.value.split(",");
    datestring.forEach((date) => {
      eventObject.date.push(new Date(date.trim()));
    });

    // vérification de la validité des données
    if (
      // verification de la longueur max des champs
      eventObject.name.length > 256 ||
      eventObject.author.length > 256 ||
      eventObject.description.length > 256
    ) {
      alert(
        "Le nom, la description et le nom de l'auteur de l'évènement ne doivent pas dépasser 256 caractères"
      );
    } else if (
      // verification de la longueur min des champs
      eventObject.name.length < 3 ||
      eventObject.author.length < 3 ||
      eventObject.description.length < 3
    ) {
      alert(
        "Le nom, la description et le nom de l'auteur de l'évènement doivent contenir au moins 3 caractères"
      );
    } else {
      // envoi des données à l'API
      // postEvents(eventObject);
      console.log(eventObject["date"][0]);
    }
  });
};

// export de la fonction superBtn
export { superBtn };

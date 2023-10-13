const nameEvent = document.getElementById("eventTitle");
const descriptionEvent = document.getElementById("description");
const authorEvent = document.getElementById("authorEvent");
const dateEvent = document.getElementById("eventDate");
const btnAddEvent = document.getElementById("btnAddEvent");

btnAddEvent.addEventListener("click", () => {
  const event = {
    name: nameEvent.value,
    description: descriptionEvent.value,
    author: authorEvent.value,
    date: [],
  };

  const datestring = dateEvent.value.split(",");
  datestring.forEach((date) => {
    event.date.push(new Date(datestring.trim()));
  });

  if (event.name.length > 256 || event.description.length > 256) {
    alert(
      "Le nom et la description de l'évènement ne doivent pas dépasser 256 caractères"
    );
  } else {
    //methode post
    console.log(event);
  }
});

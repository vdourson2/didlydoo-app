const nameEvent = document.getElementById("eventTitle");
const descriptionEvent = document.getElementById("description");
const authorEvent = document.getElementById("author");
const dateEvent = document.querySelector("#eventDate");
const btnAddEvent = document.getElementById("send");

btnAddEvent.addEventListener("click", () => {
  console.log();

  const event = {
    name: nameEvent.value,
    description: descriptionEvent.value,
    author: authorEvent.value,
    date: [],
  };
  console.log(event.description);
  const datestring = dateEvent.value.split(",");
  datestring.forEach((date) => {
    event.date.push(new Date(date.trim()));
  });

  if (event.name.length > 256 || event.description.length > 256) {
    alert(
      "Le nom et la description de l'évènement ne doivent pas dépasser 256 caractères"
    );
  } else {
    //methode post
    //   return event;
    console.log(event);
  }
});

export { btnAddEvent };

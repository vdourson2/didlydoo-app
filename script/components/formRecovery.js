const nameEvent = document.getElementById("nameEvent");
const descriptionEvent = document.getElementById("descriptionEvent");
const authorEvent = document.getElementById("authorEvent");
const dateEvent = document.getElementById("dateEvent");
const btnAddEvent = document.getElementById("btnAddEvent");

btnAddEvent.addEventListener("click", () => {
  const event = {
    name: nameEvent.value,
    description: descriptionEvent.value,
    author: authorEvent.value,
    date: dateEvent.value,
  };
  if (event.name.length > 256 || event.description.length > 256) {
    alert(
      "Le nom et la description de l'évènement ne doivent pas dépasser 256 caractères"
    );
  } else {
    //methode post
    console.log(event);
  }
});

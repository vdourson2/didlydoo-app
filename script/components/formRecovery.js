const nameEvent = document.getElementById("eventTitle");
const descriptionEvent = document.getElementById("description");
const authorEvent = document.getElementById("author");
const dateEvent = document.querySelector("#eventDate");
const btnAddEvent = document.getElementById("send");

const superBtn = () => {
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

    if (
      event.name.length > 256 ||
      event.author.length > 256 ||
      event.description.length > 256
    ) {
      alert(
        "Le nom, la description et le nom de l'auteur de l'évènement ne doivent pas dépasser 256 caractères"
      );
    } else if (
      event.name.length < 3 ||
      event.author.length < 3 ||
      event.description.length < 3
    ) {
      alert(
        "Le nom, la description et le nom de l'auteur de l'évènement doivent contenir au moins 3 caractères"
      );
    } else {
      //methode post
      //   return event;
      console.log(event);
    }
  });
};

export { superBtn };

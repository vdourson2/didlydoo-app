import { deleteEvent } from "../data/fetchData.js";
const btnDelete = document.querySelector(".event-btn-delete");

const DeletedBtn = () => {
  btnDelete.addEventListener("click", () => {
    deleteEvent(eventID);
  });
};

export { DeletedBtn };
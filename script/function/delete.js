import { deleteEvent } from "../function/fetchData.js";
const btnDelete = document.querySelector(".btn-delete");

const DeletedBtn = () => {
  btnDelete.addEventListener("click", () => {
    deleteEvent(eventID);
  });
};

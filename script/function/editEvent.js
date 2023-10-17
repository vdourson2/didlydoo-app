import { patchEvents } from "../data/fetchData";

export function editEvent(e, id) {
    
    let description = e.target.previousElementSibling;
    let name = description.previousElementSibling;

    name.contentEditable = "true";
    name.style.border = "1px solid lightgrey";
    description.contentEditable = "true";
    description.style.border = "1px solid lightgrey";
    e.target.addEventListener("click", (e)=>{
        // Rendre non éditable et retirer le style
        name.contentEditable = "false";
        name.style.border = "";
        description.contentEditable = "false";
        description.style.border = "";
        e.target.addEventListener('click',(ev) => editEvent(ev,id));
        // Modifier dans la base de données
        let eventObject = {
            name : name.textContent,
            description : description.textContent,
        }
        patchEvents(id,eventObject);
    })
}
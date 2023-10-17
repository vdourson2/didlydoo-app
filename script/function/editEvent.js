export function editEvent(e, id) {
    
    let description = e.target.previousElementSibling;
    let name = description.previousElementSibling;
    console.log("id",id);
    console.log("description : ", description);
    console.log("name Event : ", name);
}
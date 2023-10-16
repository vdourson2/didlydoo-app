//Si aucun argument n'est passé à la fonction, cette fonction récupère la liste de 
//tous les events stockés dans l'API et lance l'affichage des données.
//Le premier argument représente le type de données que l'on souhaite récupérer : "events" ou "attendees"
//La valeur de cet argument par défaut est "events".
//Le deuxième argument représente l'id si le 1er argument est "events",
//et il représente le nom si le 1er argument est "attendees".
//La valeur de cet argument par défaut est vide, c'est à dire que la fonction renvoie la liste de tous les events
import { displayEvent } from "./scr/function/displayEvent.js";

export async function getData(sortOf = "events", id = ""){
    try{
        let promise = await fetch(`http://localhost:3000/api/${sortOf}/${id}`);
        let eventList = await promise.json();
        console.log(eventList);
        displayEvent(eventList);
        return eventList
    }
    catch (error){
        console.log('Impossible de récupérer les données', error);
    }
    
}


//Cette fonction prend un objet Javascript contenant un nouvel event 
//et l'ajoute à la base de données. 
export async function postEvents(eventObject){
    try{
        // console.log(JSON.stringify(eventObject));
        let promise = await fetch('http://localhost:3000/api/events/',{
            method: 'POST',
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject),
        });
    }
    catch(error){
        console.log("Impossible d'envoyer les données", error);
    }
}

//Cette fonction supprime dans la db l'event dont lid est donné en argument
export async function deleteEvent(id){
    try{
        let promise = await fetch(`http://localhost:3000/api/events/${id}/`,{
            method: 'DELETE',
        });
    }
    catch(error){
        console.log("Impossible d'effacer les données : ", error);
    }
}
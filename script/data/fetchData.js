//Si aucun argument n'est passé à la fonction, cette fonction récupère la liste de
//tous les events stockés dans l'API et lance l'affichage des données.
//Le premier argument représente le type de données que l'on souhaite récupérer : "events" ou "attendees"
//La valeur de cet argument par défaut est "events".
//Le deuxième argument représente l'id si le 1er argument est "events",
//et il représente le nom si le 1er argument est "attendees".
//La valeur de cet argument par défaut est vide, c'est à dire que la fonction renvoie la liste de tous les events
import { displayEvent } from "../function/displayEvent.js";

export async function getData(sortOf = "events", id = "") {
  try {
    let promise = await fetch(`http://localhost:3000/api/${sortOf}/${id}`);
    let eventList = await promise.json();
    console.log(eventList);
    displayEvent(eventList);
    return eventList;
  } catch (error) {
    console.log("Impossible de récupérer les données", error);
  }
}

//Cette fonction prend un objet Javascript contenant un nouvel event 
//et l'ajoute à la base de données. 
//{ name: string, dates: array of dates ['YYYY-MM-DD'], author: string, description: string }
export async function postEvents(eventObject){
    try{
        // console.log(JSON.stringify(eventObject));
        let promise = await fetch('http://localhost:3000/api/events/',{
            method: 'POST',
            headers : {
                "Accept": "application/json; charset=UTF-8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject),
        });
    }
    catch(error){
        console.log("Impossible d'envoyer les données", error);
    }
}

//Cette fonction prend l'id d'un event comme argument 
//ainsi qu'un tableau de dates et ajoute ces dates à l'évènement
//{ dates: array of dates ['YYYY-MM-DD'] }
export async function postDates(id, datesArray){
    try{
        // console.log(JSON.stringify(datesArray));
        let promise = await fetch(`http://localhost:3000/api/events/${id}/add_dates`,{
            method: 'POST',
            headers : {
                "Accept": "application/json; charset=UTF-8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datesArray),
        });
        let json = await promise.json();
        console.log(json);
    }
    catch(error){
        console.log("Impossible d'ajouter les dates", error);
    }
}

//Cette fonction prend comme argument l'id d'un event,
//et un objet contenant le nom d'un participant et un tableau avec ses disponibilités.
//{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
export async function postAttend(id, attendObject){
    try{
        // console.log(JSON.stringify(attendObject));
        let promise = await fetch(`http://localhost:3000/api/events/${id}/attend`,{
            method: 'POST',
            headers : {
                "Accept": "application/json; charset=UTF-8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attendObject),
        });
        let json = await promise.json();
        console.log(json);
    }
    catch(error){
        console.log("Impossible d'ajouter les participations", error);
    }
}

//Cette fonction supprime dans la db l'event dont l'id est donné en argument
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

//Cette fonction l'id d'un event comme argument, 
//ainsi qu'une donnée à remplacer pour cet event, sous forme d'un objet,
//et remplace cette donnée dans la db
//{ name: string (optional), author: string (optional), description: string (optional) }
export async function patchEvents(id, eventObject){
    try{
        console.log(JSON.stringify(eventObject));
        let promise = await fetch(`http://localhost:3000/api/events/${id}/`,{
            method: 'PATCH',
            headers : {
                "Accept": "application/json; charset=UTF-8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject),
        });
        let json = await promise.json();
        console.log(json);
    }
    catch(error){
        console.log("Impossible de remplacer les données de l'event", error);
    }
}

//Cette fonction prend l'id d'un event comme argument, 
//ainsi qu'un objet comprenant le nom d'un des participants,
//et les modifications de dates à faire le concernant (suppression ou modification)
//{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
export async function patchAttend(id, attendObject){
    try{
        console.log(JSON.stringify(attendObject));
        let promise = await fetch(`http://localhost:3000/api/events/${id}/attend/`,{
            method: 'PATCH',
            headers : {
                "Accept": "application/json; charset=UTF-8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attendObject),
        });
    }
    catch(error){
        console.log("Impossible de remplacer les données de l'attend :", error);
    }
}

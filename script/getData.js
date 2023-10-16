import { displayEvent } from "./function/displayEvent";

//Cette fonction réculpère la liste de tous les events stockés dans l'API
export async function getEvents(){
    try{
        let promise = await fetch('http://localhost:3000/api/events/');
        let eventList = await promise.json();
        console.log(eventList);
        displayEvent(eventList);
    }
    catch (error){
        console.log('Impossible de récupérer les données', error);
    }
}

export async function postEvents(eventObject){
    try{
        console.log(JSON.stringify(eventObject));
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

    }
}
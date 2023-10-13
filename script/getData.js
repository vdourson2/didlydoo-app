//Si aucun argument n'est passé à la fonction, cette fonction récupère la liste de 
//tous les events stockés dans l'API et lance l'affichage des données
//Si un id est communiqué en argument, cette fonction renvoie uniquement l'event ayant l'id indiqué
export async function getEvents(id = ""){
    try{
        let promise = await fetch(`http://localhost:3000/api/events/${id}`);
        let eventList = await promise.json();
        console.log(eventList);
        //Appeler la fonction display de Mathias
    }
    catch (error){
        console.log('Impossible de récupérer les données', error);
    }
}


//Cette fonction prend un objet Javascript contenant un nouvel event 
//et l'ajoute à la base de données. 
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
        console.log("Impossible d'envoyer les données", error);
    }
}

//export async function 
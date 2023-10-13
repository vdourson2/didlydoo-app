//Cette fonction réculpère la liste de tous les events stockés dans l'API
export async function getData(){
    try{
        let promise = await fetch('http://localhost:3000/api/events');
        let eventList = await promise.json();
        console.log(eventList);
        //Appeler la fonction display de Mathias
    }
    catch (error){
        console.log('Impossible de récupérer les données', error);
    }
}

export async function postData(eventObject){
    try{
        let promise = await fetch('http://localhost:3000/api/events',{
            method: 'POST',
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject;
        });
    
    }
    catch(error){

    }
}
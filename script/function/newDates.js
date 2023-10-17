    
    export function date () {
        
    const addDate = document.getElementById("addDate");
    const futurDates = document.getElementById("futur-dates");


    addDate.addEventListener('click', () => {
        const newDate = document.createElement("input");
        newDate.setAttribute("type", "date");
        newDate.classList('date');


        futurDates.appendChild(newDate);
    })

    }

    // export { addDate };
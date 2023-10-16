import "/styles/style.scss";
import { getEvents } from "./getData.js";
import { postEvents } from "./getData.js";
//import { add } from "./addEvent.js";
//import { send } from "./addEvent.js";
import { superBtn } from "./components/formRecovery.js";
import { addEvent } from './addEvent.js'
import { date } from './newDates.js';
import { displayEvent } from "./function/displayEvent.js";


postEvents();
getEvents();
addEvent();
//add();
//send();
btnAddEvent();
displayEvent();


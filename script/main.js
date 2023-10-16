import "/styles/style.scss";
import { getEvents } from "./fetchData.js";
import { postEvents } from "./fetchData.js";
//import { add } from "./addEvent.js";
//import { send } from "./addEvent.js";
import { superBtn } from "./components/formRecovery.js";
import { addEvent } from './addEvent.js'
import { date } from './newDates.js';


postEvents();
getEvents();
add();
send();
btnAddEvent();
displayEvent();


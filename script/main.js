import '/styles/style.scss';
import { getEvents } from './getData.js'
import { postEvents } from './getData.js'
import { add } from './addEvent.js'
import { send } from './addEvent.js'
import { btnAddEvent } from "./components/formRecovery.js";
import { displayEvent } from "./function/displayEvent.js";

postEvents();
getEvents();
add();
send();
btnAddEvent();
displayEvent();


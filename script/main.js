import '/styles/style.scss';
import { getEvents } from './fetchData.js'
import { postEvents } from './fetchData.js'
import { add } from './addEvent.js'
import { send } from './addEvent.js'
import { btnAddEvent } from "./components/formRecovery.js";

postEvents();
getEvents();
add();
send();
btnAddEvent();
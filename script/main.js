import '/styles/style.scss';
import { getEvents } from './getData.js'
import { postEvents } from './getData.js'
import { add } from './addEvent.js'
import { send } from './addEvent.js'
import { btnAddEvent } from "./components/formRecovery.js";

postEvents(testObject);
getEvents();
add();
send();
btnAddEvent();


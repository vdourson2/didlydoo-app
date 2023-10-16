import '/styles/style.scss';
import { getEvents } from './fetchData.js'
import { postEvents } from './fetchData.js'
import { addEvent } from './addEvent.js'
import { date } from './newDates.js';
import { btnAddEvent } from "./components/formRecovery.js"

postEvents();
getEvents();
addEvent();
date();
btnAddEvent();


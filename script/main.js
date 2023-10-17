import '/styles/style.scss'
import { getData } from './fetchData.js'
import { postEvents } from './fetchData.js'
import { deleteEvent } from './fetchData.js'
import { patchEvents } from './fetchData.js'
import { patchAttend } from './fetchData.js'
import { postDates } from './fetchData.js'
//import { add } from "./addEvent.js";
//import { send } from "./addEvent.js";
import { superBtn } from "./components/formRecovery.js";
import { addEvent } from "./function/addEvent.js";
import { date } from "./function/newDates.js";



getData();
postEvents();
getEvents();
addEvent();
//add();
//send();
addEvent();
date();
superBtn();

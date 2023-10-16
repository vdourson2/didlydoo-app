import "/styles/style.scss";
import { getData } from "./fetchData.js";
import { postEvents } from "./fetchData.js";
//import { add } from "./addEvent.js";
//import { send } from "./addEvent.js";
import { addEvent } from "./addEvent.js";
import { date } from "./newDates.js";
import { superBtn } from "./components/formRecovery.js";

getData();
postEvents();
addEvent();
//add();
//send();
date();
superBtn();

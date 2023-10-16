import "/styles/style.scss";
import { getData } from "./data/fetchData.js";
import { postEvents } from "./data/fetchData.js";
//import { add } from "./addEvent.js";
//import { send } from "./addEvent.js";
import { superBtn } from "./components/formRecovery.js";
import { addEvent } from "./function/addEvent.js";
import { date } from "./function/date.js";

getData();
postEvents();
getEvents();
addEvent();
//add();
//send();
addEvent();
date();
superBtn();

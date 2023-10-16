import "/styles/style.scss";
import { getEvents } from "./getData.js";
import { postEvents } from "./getData.js";
import { addEvent } from "./addEvent.js";
import { btnAddEvent } from "./components/formRecovery.js";

postEvents(testObject);
getEvents();
addEvent();
btnAddEvent();

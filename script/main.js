import '/styles/style.scss'
import { getEvents } from './getData.js'
import { postEvents } from './getData.js'
import { btnAddEvent } from "./components/formRecovery.js";


postEvents();
getEvents();
btnAddEvent();
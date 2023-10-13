import '/styles/style.scss'
import { getEvents } from './getData.js'
import { postEvents } from './getData.js'
import { btnAddEvent } from "./components/formRecovery.js";

let testObject = {
  name: "Test POST db",
  description: "I try to post a new event on the API",
  author: "Virginie",
  dates: [
    "2023-03-17",
    "2024-03-18",
    "2024-03-21",
    "2024-03-22"
  ],
};

postEvents(testObject);
getEvents();
btnAddEvent();



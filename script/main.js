import '/styles/style.scss'
import { setupCounter } from './components/counter.js'
import { getData } from './getData.js'
import { postData } from './getData.js'

testObject = {
  id: "77a777v77",
  name: "Test POST db",
  description: "I try to post a new event on the API",
  author: "Virginie",
  dates: [
    "2023-03-17",
    "2024-03-18",
    "2024-03-21",
    "2024-03-22"
  ],
},

postData(testObject);
getData();

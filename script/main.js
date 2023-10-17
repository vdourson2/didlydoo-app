import '/styles/style.scss'
import { setupCounter } from './components/counter.js'
import { getData } from './fetchData.js'
import { postEvents } from './fetchData.js'
import { deleteEvent } from './fetchData.js'
import { patchEvents } from './fetchData.js'
import { patchAttend } from './fetchData.js'
import { postDates } from './fetchData.js'
import { postAttend } from './fetchData.js'

// let testPatchObject = {
//   name: "Test PATCH db",
// };

// let testPatchAttend = {
//   name : "Michou",
//   dates : [
//     {
//       "date": "2022-03-17",
//       "available": true
//     },
//     {
//       "date": "2022-03-18",
//       "available": false
//     },
//     {
//       "date": "2022-03-21",
//       "available": true
//     }
//   ]
// };

//postEvents(testObject);
//getData();
//deleteEvent("f25013cfb2c9");
//patchEvents("4869d249ef3c",testPatchObject);
//patchAttend("f5b6564b5dc4",testPatchAttend);
// postDates("f5b6564b5dc4",{dates : ["2023-03-21","2023-03-22"]});
postAttend(id, attendObject)

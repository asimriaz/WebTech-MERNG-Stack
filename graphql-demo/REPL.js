const mongoose = require('mongoose');
const db = require('./models');


// db.Grade.find()
// .then(grades => {
//     console.log(grades);
// });



(async()=>{
    let grades = await db.Grade.find()
    let students = await db.Student.find()
    console.log([students, grades]);
})();
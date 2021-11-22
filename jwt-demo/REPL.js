const db = require('./models')


db.Student.find()
.then(students => {
    console.log(students)
    process.exit();
})
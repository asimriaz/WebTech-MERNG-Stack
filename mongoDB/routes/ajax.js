var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ajax/index', { title: 'AJAX Express' });
});

/* GET home page. */
router.get('/xhr-list', function (req, res, next) {
    db.Course.find().sort({ courseid: 1 })
        .then(courses => {
            res.render('ajax/list',
                {
                    courses: courses
                });
            //console.log(courses);
        })
});

router.get('/xhr-edit', function (req, res, next) {
    console.log('Id :>> ', req.query.courseid);
    db.Course.find({ courseid: req.query.courseid })
        .then(course => {
            res.render('ajax/edit', {
                course: course[0]
            });
        })

});

router.post('/xhr-save', async function (req, res, next) {
    console.log('Course :>> ', req.body);

    let result = await db.Course.updateOne({ courseid: req.body.courseid }, {
        $set: req.body
    })

    //console.log(result);

    res.send(result);
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;

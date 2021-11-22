const router = require('express').Router();
const Controller = require('../controllers');

router.post('/login', Controller.User.authenticate);

module.exports = router;

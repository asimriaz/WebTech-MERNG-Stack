var express = require('express');
var router = express.Router();
const db = require('../models');
const jwt = require('jsonwebtoken');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

router.get('*', checkUser);

const maxAge = 2 * 24 * 60 * 60;
const createToken = (user) => {
	return jwt.sign({ ...user }, 'batana nahi', {
		expiresIn: maxAge,
	});
};

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/signup', function (req, res, next) {
	res.render('signup', { title: 'Sign Up' });
});

/* POST Sign Up. */
router.post('/signup', async function (req, res, next) {
	console.log('params :>> ', req.body);

	try {
		const user = await db.User.create({ ...req.body });
		//console.log(user);
		res.render('signup', { title: 'Sign Up', message: 'User Sign Up Successfully' });
	} catch (error) {
		console.log(error);
		res.status(400).send('Error, User not created');
	}
});

/* GET home page. */
router.get('/login', function (req, res, next) {
	res.render('login', { title: 'Login' });
});

/* POST home page. */
router.post('/login', async function (req, res, next) {
	const { username, password } = req.body;

	try {
		const user = await db.User.login(username, password);
		const token = createToken({ id: user._id, fullname: user.fullname });
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		console.log(user);
		res.redirect('/dashboard');
	} catch (error) {
		console.log(error);
		res.render('login', { title: 'Login', error });
	}
});

/* GET home page. */
router.get('/dashboard', requireAuth, function (req, res, next) {
	res.render('dashboard', { title: 'Dashboard' });
});

/* GET home page. */
router.get('/logout', function (req, res, next) {
	res.cookie('jwt', '', { maxAge: 1 });
	res.redirect('/');
});

/* GET home page. */
router.get('/set-cookies', function (req, res, next) {
	//res.setHeader('Set-Cookie', 'present=true');
	//res.cookie('username', 'peter');
	//res.cookie('present', false, { maxAge: 1000 * 60 * 60 * 24 * 2, httpOnly: true });
	//res.render('index', { title: 'Home Page' });
	res.end();
});

module.exports = router;

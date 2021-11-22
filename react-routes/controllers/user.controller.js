const db = require('../models');
const jwt = require('jsonwebtoken');

const maxAge = 2 * 24 * 60 * 60;
const createToken = (user) => {
	return jwt.sign({ ...user }, 'batana nahi', {
		expiresIn: maxAge,
	});
};

exports.getStudens = (req, res) => {
	db.Student.find()
		.sort({ regno: 1 })
		.limit(10)
		.then((students) => res.status(200).json(students));
};

exports.authenticate = async (req, res) => {
	console.log(`Params : `, req.body);
	const { username, password } = req.body;

	try {
		const user = await db.User.login(username, password);
		const token = createToken({ id: user._id, fullname: user.fullname });
		//res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		console.log(user);
		if (user) {
			res.status(200).json({ user, token });
		}
		//res.redirect('/dashboard');
	} catch (error) {
		console.log(error);
		res.render('login', { title: 'Login', error });
	}
};

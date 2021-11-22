const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', require('./api/user'));

app.listen(5000, () => {
	console.log(`Server is running on http://localhost:5000/`);
});

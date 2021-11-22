const express = require('express')
const morgan = require('morgan')
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')))
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use('/', require('./routes/index'));
app.use('/api/students/', require('./api/student'));
app.use('/api/courses/', require('./api/course'));
app.use('/api/registrations/', require('./api/registration'));


app.listen(3400, ()=> console.log(`Server is running on http://localhost:3400`));
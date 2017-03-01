const express       = require('express');
const app           = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', 'views');

const logger        = require('morgan');
app.use(logger('dev'));

const path          = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./resources'));

app.listen(process.env.PORT || 8000);
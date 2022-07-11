const express = require('express');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const { homeRouter } = require('./routes/home');
const { configuratorRouter } = require('./routes/configurator');
const { orderRouter } = require('./routes/order');
const { handlebarsHelpers } = require('./handlebars-helpers');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.engine('.hbs', engine({
  extname: '.hbs',
  helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/configurator', configuratorRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');
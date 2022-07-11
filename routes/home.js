const express = require('express');
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers');

const homeRouter = express.Router();
homeRouter
  .get('/', (req, res) => {
    const { cookieBase } = req.cookies;
    console.log(cookieBase);
    const sum = (cookieBase ? handlebarsHelpers
      .findPrice(Object.entries(COOKIE_BASES), cookieBase) : 0)
    + ['coconut', 'cranberries'].reduce((prev, curr) => prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr), 0);

    res.render('home/index.hbs', {
      cookie: {
        base: cookieBase,
        addons: ['coconut', 'cranberries'],
      },
      bases: Object.entries(COOKIE_BASES),
      addons: Object.entries(COOKIE_ADDONS),
      sum,

    });
  });

module.exports = {
  homeRouter,
};

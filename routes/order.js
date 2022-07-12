const express = require('express');

class OrderRouter {
  constructor(cmapp) {
    this.cmapp = cmapp;
    this.router = express.Router();
    this.setUpRoutes();
  }

  setUpRoutes() {
    this.router.get('/summary', this.summary);
    this.router.get('/thanks', this.thanks);
  }

  summary = (req, res) => {
    const {
      sum, addons, base, allBases, allAddons,

      summary = (req, res) => {

      },
    } = this.cmapp.getCookieSettings(req);

    res.render('order/summary', {
      cookie: {
        base,
        addons,
      },
      allBases,
      allAddons,
      sum,
    });
  };

  thanks = (req, res) => {
    const { sum } = this.cmapp.getCookieSettings(req);

    res
      .clearCookie('cookieBase', {
        // Ze względu na używanie ramki (Repl)
        sameSite: 'none',
        secure: true,
      })
      .clearCookie('cookieAddons', {
        // Ze względu na używanie ramki (Repl)
        sameSite: 'none',
        secure: true,
      })
      .render('order/thanks', {
        sum,
      });
  };
}

module.exports = {
  OrderRouter,
};

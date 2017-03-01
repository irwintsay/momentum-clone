let UnsplashAPI         = require('../../services/unsplash');

let controller = {};

controller.getRandomBackground = (req, res) => {
  UnsplashAPI
    .getBackground()
    .then(r => r.json())
    .then(data => {
      res.json(data.urls.full);
    });
};

module.exports = controller;
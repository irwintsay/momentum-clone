let UnsplashAPI         = require('../../services/unsplash');

let controller = {};

controller.index = (req, res) => {
  UnsplashAPI
    .getBackground()
    .then(r => r.json())
    .then(data => {
      console.log(data.urls.full);
      res.render('home/index', { background: data.urls.full });
    })
};

module.exports = controller;
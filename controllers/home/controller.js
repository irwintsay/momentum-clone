let controller = {};

controller.index = (req, res) => {
  res.render('home/index');
};

module.exports = controller;


const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('home');
};

indexCtrl.renderCargaHogar = (req, res) => {
  res.render('CargaHogar');
};


module.exports = indexCtrl;
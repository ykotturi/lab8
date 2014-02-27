var projects = require('../projects.json');

/*
 * GET home page.
 */


exports.view = function(req, res){
	var data = {'grid': false};
  	res.render('index', projects);

};

exports.viewGrid = function(req, res){
	var data = {'grid': true};
  	res.render('index', data);
};
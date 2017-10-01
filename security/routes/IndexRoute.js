"use strict";

var Express 		= require('express');
var IndexProvider 	= require('../providers/IndexProvider');

(function() {

	var _route = function() {
		var Router = Express.Router();
		Router.get('/', IndexProvider.Index);

		return Router;
	};

	module.exports = _route;

})();
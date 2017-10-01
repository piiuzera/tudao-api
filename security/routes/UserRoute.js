"use strict";

var Express 		= require('express');
var UserProvider 	= require('../providers/UserProvider');

(function() {

	var _route = function() {
		var Router = Express.Router();
		Router.post('/', UserProvider.Create);
		Router.put('/:id', UserProvider.Update);
		Router.delete('/:id', UserProvider.Delete);
		Router.get('/', UserProvider.FindAll);
		Router.get('/:id', UserProvider.FindByCode);

		return Router;
	};

	module.exports = _route;

})();
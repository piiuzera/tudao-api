"use strict";

var AuthProvider = require('../providers/AuthProvider');
var Express = require('express');

(function() {

	var _route = function() {
		var Router = Express.Router();
		Router.post('/signIn', AuthProvider.SignIn);
		Router.get('/signOut', AuthProvider.SignOut);
		Router.post('/register', AuthProvider.Register);

		return Router;
	};

	module.exports = _route;

})();
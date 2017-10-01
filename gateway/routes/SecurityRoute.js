"use strict";

var AuthProvider 	= require('../providers/security/AuthProvider');
var Express 		= require('express');
var JWTMiddleware 	= require('../middlewares/JWTMiddleware');
var UserProvider 	= require('../providers/security/UserProvider');

(function() {

	var _route = function() {
		var Router = Express.Router();
		
		/*
		*	Auth
		*/
		Router.post('/auth/signIn', AuthProvider.SignIn);
		Router.get('/auth/signOut', JWTMiddleware.Verify, AuthProvider.SignOut);
		Router.post('/auth/register', AuthProvider.Register);

		/*
		*	User
		*/
		Router.post('/user', 		JWTMiddleware.Verify, UserProvider.Create);
		Router.put('/user/:Id', 	JWTMiddleware.Verify, UserProvider.Update);
		Router.delete('/user/:id', 	JWTMiddleware.Verify, UserProvider.Delete);
		Router.get('/user', 		JWTMiddleware.Verify, UserProvider.FindAll);
		Router.get('/user/:id', 	JWTMiddleware.Verify, UserProvider.FindById);

		return Router;
	};

	module.exports = _route;

})();
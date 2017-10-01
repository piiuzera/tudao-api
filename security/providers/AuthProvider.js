"use strict";

var Auth 			= require('../models/Auth');
var AuthController 	= require('../controllers/AuthController');
var User 			= require('../models/User');

(function(self) {

	var _signIn = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();
		try {
			var auth = new Auth(Request.body);

			AuthController.SignIn(
				auth,
				CallbackSignIn.bind(this, Request, Response, HttpResponse)
			);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex;

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var CallbackSignIn = function(Request, Response, HttpResponse, Document, Error) {
		try {
			if (Error || !Document)
				throw Error || process.env.MESSAGE_ERROR_USER_NOT_FOUND;

			HttpResponse.success 	= true;
			HttpResponse.user 		= Document;

			Response.status(process.env.HTTPSTATUS_SUCCESS_OK)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || ex;

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var _signOut = function(Request, Response) {

	};

	var _register = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();
		try {
			var user = new User(Request.body);

			AuthController.Register(
				user,
				CallbackRegister.bind(this, Request, Response, HttpResponse)
			);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex;

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var CallbackRegister = function(Request, Response, HttpResponse, Document, Error) {
		try {
			if (Error)
				throw Error;

			HttpResponse.success 	= true;
			HttpResponse.user 		= Document;

			Response.status(process.env.HTTPSTATUS_SUCCESS_OK)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || ex;

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	self.SignIn 	= _signIn;
	self.SignOut 	= _signOut;
	self.Register 	= _register;

})(this);
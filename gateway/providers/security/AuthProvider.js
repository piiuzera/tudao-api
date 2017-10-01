"use strict";

var JWT 		= require('jsonwebtoken');
var WebRequest 	= require('../../WebRequest');

(function(self) {

	var _signIn = function(Request, Response) {
		WebRequest.Post(
			process.env.MS_SECURITY + '/auth/signIn',
			Request.body,
			CallbackSignIn.bind(this, Request, Response)
		);
	};

	var CallbackSignIn = function(Request, Response, Body, StatusCode) {
		try {
			var JWTOptions 			= {};
			JWTOptions.expiresIn 	= process.env.EXPIRES_JWT;
			Body.token 				= JWT.sign(Body.user, process.env.SECRET_JWT, JWTOptions);

			Response.status(StatusCode)
				.json(Body);
		} catch(ex) {
			var HttpResponse 		= {};
			HttpResponse.date 		= new Date();
			HttpResponse.message 	= ex;
			Response.status(process.env.HTTPSTATUS_ERROR_INTERNAL_SERVER_ERROR)
				.json(HttpResponse);
		}
	};

	var _signOut = function(Request, Response) {
		WebRequest.Get(
			process.env.MS_SECURITY + '/auth/signOut',
			RequestCallback.bind(this, Request, Response)
		);
	};

	var _register = function(Request, Response) {
		WebRequest.Post(
			process.env.MS_SECURITY + '/auth/register',
			Request.body,
			RequestCallback.bind(this, Request, Response)
		);
	};

	var RequestCallback = function(Request, Response, Body, StatusCode) {
		try {
			Response.status(StatusCode)
				.json(Body);
		} catch(ex) {
			var HttpResponse 		= {};
			HttpResponse.date 		= new Date();
			HttpResponse.message 	= ex;
			Response.status(process.env.HTTPSTATUS_ERROR_INTERNAL_SERVER_ERROR)
				.json(HttpResponse);
		}
	};

	self.SignIn 	= _signIn;
	self.SignOut 	= _signOut;
	self.Register 	= _register;

})(this);
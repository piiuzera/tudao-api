"use strict";

var User 			= require('../models/User');
var UserController 	= require('../controllers/UserController');

(function(self) {

	var _create = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();

		var User = new User(Request.body);

		UserController.Create(
			User,
			CallbackCreate.bind(this, Request, Response, HttpResponse)
		);
	};

	var CallbackCreate = function(Request, Response, HttpResponse, Document, Error) {
		try {
			if (Error)
				throw Error;

			HttpResponse.success 	= true;
			HttpResponse.user 		= Document;

			Response.status(process.env.HTTPSTATUS_SUCCESS_CREATED)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || 'Error';

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var _update = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();

		var User = new User(Request.body);

		UserController.Update(
			User,
			Request.params.id,
			CallbackUpdate.bind(this, Request, Response, HttpResponse)
		);
	};

	var CallbackUpdate = function(Request, Response, HttpResponse, Document, Error) {
		try {
			if (Error)
				throw Error;
			
			HttpResponse.success 	= true;
			HttpResponse.user 		= Document;

			Response.status(process.env.HTTPSTATUS_SUCCESS_ACCEPTED)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || 'Error';

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var _delete = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();

		UserController.Delete(
			Request.params.id,
			CallbackDelete.bind(this, Request, Response, HttpResponse)
		);
	};

	var CallbackDelete = function(Request, Response, HttpResponse, IsDeleted, Error) {
		try {
			if (Error)
				throw Error;
			
			HttpResponse.success 	= true;
			HttpResponse.message 	= 'Deleted Success!';

			Response.status(process.env.HTTPSTATUS_SUCCESS_ACCEPTED)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || 'Error';

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var _findAll = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();

		UserController.FindAll(
			CallbackFindAll.bind(this, Request, Response, HttpResponse)
		);
	};

	var CallbackFindAll = function(Request, Response, HttpResponse, Documents, Error) {
		try {
			if (Error)
				throw Error;

			HttpResponse.success 	= true;
			HttpResponse.users 		= Documents;

			Response.status(process.env.HTTPSTATUS_SUCCESS_OK)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || 'Error';

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	var _findByCode = function(Request, Response) {
		var HttpResponse = {};
		HttpResponse.date = new Date();

		UserController.FindByCode(
			Request.params.id,
			CallbackFindByCode.bind(this, Request, Response, HttpResponse)
		);
	};

	var CallbackFindById = function(Request, Response, HttpResponse, Document, Error) {
		try {
			if (Error)
				throw Error;

			HttpResponse.success 	= true;
			HttpResponse.user 		= Document;

			Response.status(process.env.HTTPSTATUS_SUCCESS_OK)
				.json(HttpResponse);
		} catch(ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || 'Error';

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};

	self.Create 	= _create;
	self.Update 	= _update;
	self.Delete 	= _delete;
	self.FindAll 	= _findAll;
	self.FindByCode	= _findByCode;

})(this);
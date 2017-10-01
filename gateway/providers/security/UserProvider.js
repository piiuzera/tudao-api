"use strict";

var WebRequest = require('../../WebRequest');

(function(self) {

	var _create = function(Request, Response) {
		WebRequest.Post(
			process.env.MS_SECURITY + '/user',
			Request.body,
			RequestCallback.bind(this, Request, Response)
		);
	};

	var _update = function(Request, Response) {
		WebRequest.Put(
			process.env.MS_SECURITY + '/user/' + Request.params.id,
			Request.body,
			RequestCallback.bind(this, Request, Response)
		);
	};

	var _delete = function(Request, Response) {
		WebRequest.Delete(
			process.env.MS_SECURITY + '/user/' + Request.params.id,
			RequestCallback.bind(this, Request, Response)
		);
	};

	var _findAll = function(Request, Response) {
		WebRequest.Get(
			process.env.MS_SECURITY + '/user',
			RequestCallback.bind(this, Request, Response)
		);
	};

	var _findById = function(Request, Response) {
		WebRequest.Get(
			process.env.MS_SECURITY + '/user/' + Request.params.id,
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

	self.Create 	= _create;
	self.Update 	= _update;
	self.Delete 	= _delete;
	self.FindAll 	= _findAll;
	self.FindById 	= _findById;

})(this);
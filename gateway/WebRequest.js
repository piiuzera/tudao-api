"use strict";

var RequestConnection = require('request');

(function(self) {

	self.Request = {};

	var _init = function() {
		var RequestDefault 		= {};
		self.Request = RequestConnection.defaults(RequestDefault);
	};

	var _get = function(Url, Callback) {
		var RequestOptions = SetRequestOptions(Url);

		self.Request.get(
			RequestOptions,
			CallbackRequest.bind(this, Callback)
		);
	};

	var _post = function(Url, Form, Callback) {
		var RequestOptions = SetRequestOptions(Url, Form);

		self.Request.post(
			RequestOptions,
			CallbackRequest.bind(this, Callback)
		);
	};

	var _put = function(Url, Form, Callback) {
		var RequestOptions = SetRequestOptions(Url, Form);

		self.Request.put(
			RequestOptions,
			CallbackRequest.bind(this, Callback)
		);
	};

	var _delete = function(Url, Callback) {
		var RequestOptions = SetRequestOptions(Url);

		self.Request.delete(
			RequestOptions,
			CallbackRequest.bind(this, Callback)
		);
	};

	var SetRequestOptions = function(Url, form, headers) {
		var RequestOptions = {};
		RequestOptions.url = Url;
		if (form)
			RequestOptions.form = form;

		if (headers)
			RequestOptions.headers = headers;

		return RequestOptions;
	};

	var CallbackRequest = function(Callback, Error, Response, Body) {
        var StatusCode 		= Response 	? Response.statusCode 	: null;
        var ResponseBody	= Body 		? JSON.parse(Body) 		: null;
        Callback(ResponseBody, StatusCode);
	};

	self.Init 	= _init;
	self.Get 	= _get;
	self.Post 	= _post;
	self.Put 	= _put;
	self.Delete = _delete;

})(this);

this.Init();
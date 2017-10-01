"use strict";

var IndexController = require('../controllers/IndexController');

(function(self) {

	var _index = function(request, response) {
		var httpResponse = {};
		httpResponse.date = new Date();
		try {
			var index = IndexController.Index();

			httpResponse.success = true;
			httpResponse.index = index;

			response.status(process.env.HTTPSTATUS_SUCCESS_OK)
				.json(httpResponse);
		} catch(ex) {
			httpResponse.success = false;
			httpResponse.message = ex;

			response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(httpResponse);
		}
	};

	var _notFound = function(request, response) {

	};

	self.Index 		= _index;
	self.NotFound 	= _notFound;

})(this);
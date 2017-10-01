"use strict";

var JWT = require('jsonwebtoken');

(function(self) {

	var _verify = function(Request, Response, Next) {
		var HttpResponse = {};
		HttpResponse.date = new Date();
		try {
			if (!Request.headers.authorization)
				throw process.env.MESSAGE_ERROR_TOKEN_NOT_FOUND;

			var Token = Request.headers.authorization;
			var user = JWT.verify(Token, process.env.SECRET_JWT);

			Next();
		} catch (ex) {
			HttpResponse.success = false;
			HttpResponse.message = ex.message || ex;

			Response.status(process.env.HTTPSTATUS_ERROR_BAD_REQUEST)
				.json(HttpResponse);
		}
	};
	
	self.Verify = _verify;
})(this);
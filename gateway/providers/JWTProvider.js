"use strict";

var JWT = require('jsonwebtoken');

(function(self) {

	var _sign = function(User) {
		try {
			var JWTOptions 			= {};
			JWTOptions.expiresIn 	= process.env.EXPIRES_JWT;

			return JWT.sign(User, process.env.SECRET_JWT, JWTOptions);
		} catch(ex) {
			throw ex;
		}
	};

	self.Sign 	= _sign;
})(this);
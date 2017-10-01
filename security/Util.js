"use strict";

var Crypto = require('crypto');

(function(self) {

	var _hash = function(value) {
		return Crypto.createHmac('sha256', process.env.SECRET_PASSWORD)
			.update(value)
			.digest('hex');
	};

	self.Hash = _hash;

})(this);
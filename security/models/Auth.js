"use strict";

var Validator = require('validatorjs');

(function() {

	var _auth = function(auth) {
		this.email 		= auth && auth.email 	? auth.email 	: '';
		this.password 	= auth && auth.password ? auth.password : '';

		var _validate = function() {
			var valid = new Validator(this, {
				email 		: 'required',
				password 	: 'required'
			});

			if (valid.fails())
				throw valid.errors.errors;
		};

		this.Validate = _validate;
	};

	module.exports = _auth;

})();
"use strict";

var Validator = require('validatorjs');

(function() {

	var _user = function(User) {
		this.createdAt 				= User && User.createdAt 				? User.createdAt 				: new Date();
		this.updatedAt 				= User && User.updatedAt 				? User.updatedAt 				: new Date();
		this.deletedAt 				= User && User.deletedAt 				? User.deletedAt 				: null;
		this.firstname				= User && User.firstname 				? User.firstname				: '';
		this.lastname 				= User && User.lastname 				? User.lastname 				: '';
		this.birthdate 				= User && User.birthdate 				? User.birthdate 				: null;
		this.gender 				= User && User.gender 					? User.gender 					: null;
		this.email 					= User && User.email 					? User.email 					: '';
		this.password 				= User && User.password 				? User.password					: '';
		this.password_confirmation 	= User && User.password_confirmation 	? User.password_confirmation	: '';
		this.active 				= User && User.active 					? User.active					: true;

		var _validate = function() {
			var valid = new Validator(this, {
				firstname				: 'required|max:50',
				lastname				: 'required|max:50',
				email					: 'required|max:100',
				password 				: 'required|confirmed',
				password_confirmation 	: 'required'
			});

			if (valid.fails())
				throw valid.errors.errors;
		};

		this.Validate = _validate;
	};

	module.exports = _user;

})();
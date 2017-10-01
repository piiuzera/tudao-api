"use strict";

var Crypto 			= require('crypto');
var UserRepository 	= require('../repositories/UserRepository');
var Util 			= require('../Util');

(function(self) {

	var _signIn = function(Auth, Callback) {
		Auth.Validate();

		Auth.password = Util.Hash(Auth.password);
		UserRepository.FindByEmailAndPassword(Auth.email, Auth.password, Callback);
	};

	var _signOut = function(token) {

	};

	var _register = function(User, Callback) {
		User.Validate();

		User.password = Util.Hash(User.password);
		delete User.password_confirmation;

		UserRepository.Create(User, Callback);
	};

	self.SignIn 	= _signIn;
	self.SignOut 	= _signOut;
	self.Register 	= _register;

})(this);
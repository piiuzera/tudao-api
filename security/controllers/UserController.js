"use strict";

var UserRepository = require('../repositories/UserRepository');

(function(self) {

	var _create = function(User, Callback) {
		User.Validate();
		UserRepository.Create(User, Callback);
	};

	var _update = function(User, Code, Callback) {
		User.Validate();
		UserRepository.Update(User, Code, Callback);
	};

	var _delete = function(Code, Callback) {
		UserRepository.Delete(Code, Callback);
	};

	var _findAll = function(Callback) {
		UserRepository.FindAll(Callback);
	};

	var _findById = function(Id, Callback) {
		UserRepository.FindByCode(Id, Callback);
	};

	self.Create 	= _create;
	self.Update 	= _update;
	self.Delete 	= _delete;
	self.FindAll 	= _findAll;
	self.FindById	= _findById;

})(this);
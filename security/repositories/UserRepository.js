"use strict";

var DbContext = require('./DbContext');

(function(self) {
	self.CollectionName = 'clt_user';

	var _create = function(User, Callback) {
		DbContext.Insert(self.CollectionName, User, Callback);
	};

	var _update = function(User, Id, Callback) {
		var Where 	= {};
		Where._id 	= Id;

		DbContext.Update(self.CollectionName, User, Where, Callback);
	};

	var _delete = function(Id, Callback) {
		var Where 	= {};
		Where._id 	= Id;

		DbContext.Delete(self.CollectionName, Where, Callback);
	};

	var _findAll = function(Callback) {
		DbContext.FindAll(self.CollectionName, Callback);
	};

	var _findById = function(Id, Callback) {
		var Where 	= {};
		Where._id 	= Id;

		DbContext.FindOne(self.CollectionName, Where, Callback);
	};

	var _findByEmailAndPassword = function(Email, Password, Callback) {
		var Where 		= {};
		Where.email		= Email;
		Where.password	= Password;

		DbContext.FindOne(self.CollectionName, Where, Callback);
	};

	self.Create 				= _create;
	self.Update 				= _update;
	self.Delete 				= _delete;
	self.FindAll 				= _findAll;
	self.FindById				= _findById;
	self.FindByEmailAndPassword = _findByEmailAndPassword;

})(this);
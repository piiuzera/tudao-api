"use strict";

var MongoDb 		= require('mongodb');
var StringFormat 	= require('string-format');
var DotEnv 			= require('dotenv');

(function(self) {

	var _init = function() {
		DotEnv.config();
		self.DbConnection = StringFormat('{0}://{1}:{2}/{3}',
			process.env.DB_CLNT,
			process.env.DB_HOST,
			process.env.DB_PORT,
			process.env.DB_SCHM
		);
	};

	var _insert = function(CollectionName, Document, Callback) {
		self.Open(
			function(DbContext, Error) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.insertOne(
						Document,
						CallbackInsert.bind(this, DbContext, Callback)
				);
		});
	};

	var CallbackInsert = function(DbContext, Callback, Error, Document) {
		DbContext.close();
		Callback(Document.ops[0], Error);
	};

	var _update = function(CollectionName, Document, Where, Callback) {
		self.Open(
			function(DbContext) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.updateOne(
						Where,
						Document,
						CallbackUpdate.bind(this, DbContext, Callback)
				);
		});
	};

	var CallbackUpdate = function(DbContext, Callback, Error, Document) {
		DbContext.close();
		Callback(Document, Error);
	};

	var _delete = function(CollectionName, Where, Callback) {
		self.Open(
			function(DbContext) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.deleteOne(
						Where,
						CallbackDelete.bind(this, DbContext, Callback)
				);
		});
	};

	var CallbackDelete = function(DbContext, Callback, Error, Document) {
		DbContext.close();
		Callback(Document, Error);
	};

	var _findAll = function(CollectionName, Callback) {
		self.Open(
			function(DbContext, Error) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.find({})
					.toArray(
						CallbackFindAll.bind(this, DbContext, Callback)
				);
		});
	};


	var CallbackFindAll = function(DbContext, Callback, Error, Documents) {
		DbContext.close();
		Callback(Documents, Error);
	};

	var _findOne = function(CollectionName, Where, Callback) {
		self.Open(
			function(DbContext, Error) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.findOne(
						Where,
						CallbackFindOne.bind(this, DbContext, Callback)
				);
		});
	};

	var CallbackFindOne = function(DbContext, Callback, Error, Document) {
		DbContext.close();
		Callback(Document, Error);
	};

	var _findWhere = function(CollectionName, Where, Callback) {
		self.Open(
			function(DbContext, Error) {
				if (Error) {
					Callback(null, Error);
					return;
				}

				DbContext.collection(CollectionName)
					.find(Where)
					.toArray(
						CallbackFindWhere.bind(this, DbContext, Callback)
				);
		});
	};

	var CallbackFindWhere = function(DbContext, Callback, Error, Documents) {
		DbContext.close();
		Callback(Documents, Error);
	};

	var _open = function(Callback) {
		var MongoClient = MongoDb.MongoClient;
		MongoClient.connect(
			self.DbConnection,
			CallbackOpen.bind(this, Callback)
		);
	};

	var CallbackOpen = function(Callback, Error, Database) {
		Callback(Database, Error);
	};

	self.Insert 	= _insert;
	self.Update 	= _update;
	self.Delete 	= _delete;
	self.FindAll 	= _findAll;
	self.FindOne 	= _findOne;
	self.FindWhere 	= _findWhere;
	self.Open 		= _open;
	self.Init 		= _init;

})(this);

this.Init();
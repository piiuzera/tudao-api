"use strict";

var BodyParser      = require('body-parser');
var CookieParser    = require('cookie-parser');
var Cors            = require('cors');
var DotEnv 			= require('dotenv');
var Express 		= require('express');
var Start 			= require('./Start');

(function(self) {

	var _init = function() {
		DotEnv.config();

		var App = Express();

		App.use(BodyParser.urlencoded({
			extended: true
		}));
		App.use(BodyParser.json());
		App.use(CookieParser());
		App.use(Cors());

		App.listen(
			process.env.APP_PORT,
			CallbackInit.bind(this, App)
		);
	};

	var CallbackInit = function(App) {
		console.log('Server has Started http://localhost:' + process.env.APP_PORT);
	};

	self.Init = _init;

})(this);

this.Init();
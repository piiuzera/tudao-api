"use strict";

var RouteProvider = require('./providers/RouteProvider');

(function(self) {

	var _init = function(App) {
		RouteProvider.InitializeRoute(App);
	};

	self.Init = _init;

})(this);
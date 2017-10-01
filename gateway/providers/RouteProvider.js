"use strict";

var SecurityRoute 	= require('../routes/SecurityRoute');

(function(self) {
	var _initializeRoute = function(App) {
		App.use('/api/security/', SecurityRoute());
	};

	self.InitializeRoute = _initializeRoute;

})(this);
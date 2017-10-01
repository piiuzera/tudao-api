"use strict";

var AuthRoute 	= require('../routes/AuthRoute');
var IndexRoute 	= require('../routes/IndexRoute');
var UserRoute 	= require('../routes/UserRoute');

(function(self) {
	var _initializeRoute = function(App) {
		App.use('/', IndexRoute());
		App.use('/auth', AuthRoute());
		App.use('/user', UserRoute());
	};

	self.InitializeRoute = _initializeRoute;

})(this);
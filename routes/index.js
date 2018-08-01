var express = require('express');
var router = express.Router();
var Events = require('../models/events'); 

/* GET home page. */
router.get('/', function(req, res, next) {
	Events.find(function(err,docs){ 

		var eventsChunks = []; 
		var chunkSize = 4; 
		for (var i = 0; i < docs.length; i += chunkSize) {
			eventsChunks.push(docs.slice(i, i + chunkSize)); 
		}
		res.render('shop/index', { title: 'Kinon Hockey', events: eventsChunks});
	});  
});

module.exports = router;

var Events = require('../models/events'); 

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kinonhockeydb');

var events = [
	new Events({ 
		imagePath: '/images/game.png', 
		title: 'Saturday Winter Hockey', 
		description: 'Saturday Winter Hockey', 
		eventDate: new Date("Saturday, September 15, 2018"), 
		eventTime: '8:00 AM',
		eventLocation: 'Canlan York',
		eventCostDetails: '$15/player (goalies free)'
	}), 
	new Events({ 
		imagePath: '/images/game.png', 
		title: 'Saturday Winter Hockey', 
		description: 'Saturday Winter Hockey', 
		eventDate: new Date("Saturday, September 22, 2018"), 
		eventTime: '8:00 AM',
		eventLocation: 'Canlan York',
		eventCostDetails: '$15/player (goalies free)'
	}), 
	new Events({ 
		imagePath: '/images/game.png', 
		title: 'Saturday Winter Hockey', 
		description: 'Saturday Winter Hockey', 
		eventDate: new Date("Saturday, September 29, 2018"), 
		eventTime: '8:00 AM',
		eventLocation: 'Canlan York',
		eventCostDetails: '$15/player (goalies free)'
	}), 
	new Events({ 
		imagePath: '/images/game.png', 
		title: 'Saturday Winter Hockey', 
		description: 'Saturday Winter Hockey', 
		eventDate: new Date("Saturday, October 6, 2018"), 
		eventTime: '8:00 AM',
		eventLocation: 'Canlan York',
		eventCostDetails: '$15/player (goalies free)'
	})
]; 
var done = 0;
for (var i=0; i< events.length; i++) {
	events[i].save(function (err, result){ 
		done++; 
		if (done === events.length) {
			exit();
		}
	}); 
}

function exit(){ 
	mongoose.disconnect();
}

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var schema = new Schema({ 
	imagePath: {type: String, required: true}, 
	title: {type: String, required: true},
	description: {type: String, required: true}, 
	eventDate: {type: Date, required: true}, 
	eventTime: {type: String, required: true},
	eventLocation: {type: String, required: true},
	eventCostDetails: {type: String, required: true},      
});

module.exports = mongoose.model('Events', schema);
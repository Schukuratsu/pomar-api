const colheitaHandler = require('../handlers/colheita');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/colheita',
		handler: colheitaHandler.getAll
	},
	{
		method: 'GET',
		path: '/api/v1/colheita/{id}',
		handler: colheitaHandler.find
	},
	{
		method: 'POST',
		path: '/api/v1/colheita',
		handler: colheitaHandler.save
	},
	{
		method: 'DELETE',
		path: '/api/v1/colheita/{id}',
		handler: colheitaHandler.remove,
		options: {
			cors: true
		}
	}
];
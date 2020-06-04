const colheitaHandler = require('../handlers/colheita');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/colheita',
		handler: colheitaHandler.getAll,
		options: {
			cors: true
		}
	},
	{
		method: 'GET',
		path: '/api/v1/colheita/{id}',
		handler: colheitaHandler.find,
		options: {
			cors: true
		}
	},
	{
		method: 'POST',
		path: '/api/v1/colheita',
		handler: colheitaHandler.save,
		options: {
			cors: true
		}
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
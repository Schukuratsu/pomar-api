const especieHandler = require('../handlers/especie');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/especie',
		handler: especieHandler.getAll,
		options: {
			cors: true
		}
	},
	{
		method: 'GET',
		path: '/api/v1/especie/{id}',
		handler: especieHandler.find,
		options: {
			cors: true
		}
	},
	{
		method: 'POST',
		path: '/api/v1/especie',
		handler: especieHandler.save,
		options: {
			cors: true
		}
	},
	{
		method: 'DELETE',
		path: '/api/v1/especie/{id}',
		handler: especieHandler.remove,
		options: {
			cors: true
		}
	}
];
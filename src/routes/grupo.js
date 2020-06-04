const grupoHandler = require('../handlers/grupo');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/grupo',
		handler: grupoHandler.getAll,
		options: {
			cors: true
		}
	},
	{
		method: 'GET',
		path: '/api/v1/grupo/{id}',
		handler: grupoHandler.find,
		options: {
			cors: true
		}
	},
	{
		method: 'POST',
		path: '/api/v1/grupo',
		handler: grupoHandler.save,
		options: {
			cors: true
		}
	},
	{
		method: 'DELETE',
		path: '/api/v1/grupo/{id}',
		handler: grupoHandler.remove,
		options: {
			cors: true
		}
	}
];
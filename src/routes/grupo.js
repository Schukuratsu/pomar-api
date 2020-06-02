const grupoHandler = require('../handlers/grupo');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/grupo',
		handler: grupoHandler.getAll
	},
	{
		method: 'GET',
		path: '/api/v1/grupo/{id}',
		handler: grupoHandler.find
	},
	{
		method: 'POST',
		path: '/api/v1/grupo',
		handler: grupoHandler.save
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
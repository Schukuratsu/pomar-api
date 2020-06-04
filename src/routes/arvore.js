const arvoreHandler = require('../handlers/arvore');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/arvore',
		handler: arvoreHandler.getAll,
		options: {
			cors: true
		}
	},
	{
		method: 'GET',
		path: '/api/v1/arvore/{id}',
		handler: arvoreHandler.find,
		options: {
			cors: true
		}
	},
	{
		method: 'POST',
		path: '/api/v1/arvore',
		handler: arvoreHandler.save,
		options: {
			cors: true
		}
	},
	{
		method: 'DELETE',
		path: '/api/v1/arvore/{id}',
		handler: arvoreHandler.remove,
		options: {
			cors: true
		}
	}
];
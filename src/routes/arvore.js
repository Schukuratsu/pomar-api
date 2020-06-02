const arvoreHandler = require('../handlers/arvore');

module.exports = [
	{
		method: 'GET',
		path: '/api/v1/arvore',
		handler: arvoreHandler.getAll
	},
	{
		method: 'GET',
		path: '/api/v1/arvore/{id}',
		handler: arvoreHandler.find
	},
	{
		method: 'POST',
		path: '/api/v1/arvore',
		handler: arvoreHandler.save
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
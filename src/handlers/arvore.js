const ArvoreRepository = require('../repositories/arvore');

const getAll = async () => {
	const arvores = await ArvoreRepository.getAll();
	console.log('teste');
	return { data: arvores };
};

const find = async (req) => {
	const arvore = await ArvoreRepository.find(req.params.id);
	return { data: arvore };
};

const save = async (req, h) => {
	const arvore = await ArvoreRepository.save(req.payload);

	return h.response(arvore).code(201);
};

const remove = async (req, h) => {
	await ArvoreRepository.remove(req.params.id);
	return h.response().code(204);
};

module.exports = {
	getAll,
	save,
	remove,
	find
};
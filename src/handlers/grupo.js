const GrupoRepository = require('../repositories/grupo');

const getAll = async () => {
	const grupos = await GrupoRepository.getAll();
	return { data: grupos };
};

const find = async (req) => {
	const grupo = await GrupoRepository.find(req.params.id);
	return { data: grupo };
};

const save = async (req, h) => {
	const grupo = await GrupoRepository.save(req.payload);

	return h.response(grupo).code(201);
};

const remove = async (req, h) => {
	await GrupoRepository.remove(req.params.id);
	return h.response().code(204);
};

module.exports = {
	getAll,
	save,
	remove,
	find
};
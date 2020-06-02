const EspecieRepository = require('../repositories/especie');

const getAll = async () => {
	const especies = await EspecieRepository.getAll();
	return { data: especies };
};

const find = async (req) => {
	const especie = await EspecieRepository.find(req.params.id);
	return { data: especie };
};

const save = async (req, h) => {
	const especie = await EspecieRepository.save(req.payload);
	return h.response(especie).code(201);
};

const remove = async (req, h) => {
	await EspecieRepository.remove(req.params.id);
	return h.response().code(204);
};

module.exports = {
	getAll,
	save,
	remove,
	find
};
const ColheitaRepository = require('../repositories/colheita');

const getAll = async () => {
	const colheitas = await ColheitaRepository.getAll();
	return { data: colheitas };
};

const find = async (req) => {
	const colheita = await ColheitaRepository.find(req.params.id);
	return { data: colheita };
};

const save = async (req, h) => {
	const colheita = await ColheitaRepository.save(req.payload);

	return h.response(colheita).code(201);
};

const remove = async (req, h) => {
	await ColheitaRepository.remove(req.params.id);
	return h.response().code(204);
};

module.exports = {
	getAll,
	save,
	remove,
	find
};
const EspecieModel = require('../models/especie');

const getAll = async () => await EspecieModel.find({});

const find = async id =>  await EspecieModel.findById(id);

const save = async (payload) => {
	const { descricao } = payload;

	const especie = new EspecieModel;
	especie.descricao = descricao;

	await especie.save();

	return especie;
};

const remove = async id => await EspecieModel.findOneAndDelete({ _id: id });

module.exports = {
	getAll,
	save,
	remove,
	find
};
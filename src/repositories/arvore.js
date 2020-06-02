const ArvoreModel = require('../models/arvore');

const getAll = async () => await ArvoreModel.find({});

const find = async id =>  await ArvoreModel.findById(id);

const save = async (payload) => {
	const { descricao, idade, especie } = payload;

	const arvore = new ArvoreModel;
	arvore.descricao = descricao;
	arvore.idade = idade;
	arvore.especie = especie;

	await arvore.save();

	return arvore;
};

const remove = async id => await ArvoreModel.findOneAndDelete({ _id: id });

module.exports = {
	getAll,
	save,
	remove,
	find
};
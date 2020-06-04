const GrupoModel = require('../models/grupo');

const getAll = async () => await GrupoModel.find({});

const find = async id =>  await GrupoModel.findById(id);

const save = async (payload) => {
	const { nome, descricao, arvores } = payload;

	const grupo = new GrupoModel;
	grupo.nome = nome;
	grupo.descricao = descricao;
	grupo.arvores = arvores;

	await grupo.save();

	return grupo;
};

const remove = async id => await GrupoModel.findOneAndDelete({ _id: id });

module.exports = {
	getAll,
	save,
	remove,
	find
};
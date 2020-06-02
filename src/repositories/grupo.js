const GrupoModel = require('../models/grupo');
const ArvoreModel = require('../models/arvore');
const { fromMongoose, toMongoose } = require('../helpers');

const getAll = async () => {
	let grupos = await GrupoModel.find({});
	grupos = grupos.map(async grupo => ({ 
		...grupo, 
		arvores: Promise.all(grupo.arvores.map(arvoreId => ArvoreModel.findById(arvoreId)))
	}));
	return fromMongoose(grupos);
};

const find = async id =>  fromMongoose(await GrupoModel.findById(id));

const save = async (payload) => {
	const { nome, descricao, arvores } = toMongoose(payload);

	const grupo = new GrupoModel;
	grupo.nome = nome;
	grupo.descricao = descricao;
	grupo.arvores = arvores;

	await grupo.save();

	return fromMongoose(grupo);
};

const remove = async id => await GrupoModel.findOneAndDelete({ _id: id });

module.exports = {
	getAll,
	save,
	remove,
	find
};
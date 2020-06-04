const ColheitaModel = require('../models/colheita');

const getAll = async () => await ColheitaModel.find({});

const find = async id =>  await ColheitaModel.findById(id);

const save = async (payload) => {
	const { informacoes, data, pesoBruto, ref, isGroup } = payload;

	const colheita = new ColheitaModel;
	colheita.informacoes = informacoes;
	colheita.data = data;
	colheita.pesoBruto = pesoBruto;
	colheita.ref = ref;
	colheita.isGroup = isGroup;

	await colheita.save();

	return colheita;
};

const remove = async id => await ColheitaModel.findOneAndDelete({ _id: id });

module.exports = {
	getAll,
	save,
	remove,
	find
};
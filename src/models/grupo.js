const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrupoSchema = new Schema({
	nome: String,
	descricao: String,
	arvores: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Grupo', GrupoSchema);
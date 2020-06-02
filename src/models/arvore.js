const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArvoreSchema = new Schema({
	descricao: String,
	idade: Number,
	especie: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Arvore', ArvoreSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColheitaSchema = new Schema({
	informacoes: String,
	data: Date,
	pesoBruto: Number,
	ref: mongoose.Types.ObjectId,
	isGroup: Boolean
});

module.exports = mongoose.model('Colheita', ColheitaSchema);
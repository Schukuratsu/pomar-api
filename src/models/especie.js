const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EspecieSchema = new Schema({
	descricao: String
});

module.exports = mongoose.model('Especie', EspecieSchema);
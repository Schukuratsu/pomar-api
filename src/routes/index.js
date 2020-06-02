const especies = require('./especie');
const arvores = require('./arvore');
const grupos = require('./grupo');
const colheitas = require('./colheita');

module.exports = [
	...especies,
	...arvores,
	...grupos,
	...colheitas
];
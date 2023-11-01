const express = require('express');
const router = express.Router();
const calculadoraController = require('../controles/controleCalculadora');

router.get('/', calculadoraController.mostrarFormulario);

router.post('/calcular', calculadoraController.calcular);

module.exports = router;
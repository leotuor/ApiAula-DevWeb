import express from 'express';
import clientesController from '../controllers/clientes-controller.js'
import titulosController from '../controllers/titulos-controller.js';
import usuariosController from '../controllers/usuario-controller.js';

const router = express.Router();
router.use('/clientes', clientesController);
router.use('/titulos', titulosController);
router.use('/usuario', titulosController);

export default router;